import styles from "./createPurchaseForm.module.css";
import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Button,
  Grid,
  Typography,
  TextareaAutosize,
  ToggleButton,
} from "@mui/material";
import FileUploadPlaceholder from "../fileUploadPlaceholder/fileUploadPlaceholder.component";
import { useDispatch } from "react-redux";
import { generateUniqueId } from "../../../helpers/utilities/generateUniqueId";
import { todayDate } from "../../../helpers/utilities/todayDate";
import { showToast } from "../../../helpers/utilities/showToast";
import { useNavigate } from "react-router-dom";
import { addNewPurchaseRequest } from "../../../appState/slices/purchaseSlice";
import { formatDate } from "../../../helpers/utilities/formatDate";
import ControlSelector from "../../general/dynamicControler/ControlSelector";
import { useState } from "react";

const CreatePurchaseForm = () => {
  const { control, handleSubmit, reset, register, watch, setValue } = useForm();
  const imgFile = watch("purchaseFile");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isBudgeted, setIsBudgeted] = useState("false");

  const onSubmit = (data) => {
    const finalData = {
      ...data,
      id: generateUniqueId(),
      requestDate: todayDate(),
      requestBy: "kenzy ali mohamed",
      department: "Human Resources",
      status: "pending",
      budgeted: !isBudgeted,
      dueDate: formatDate(data.dueDate),
      updateDate: "",
      purchaseFile:
        data.purchaseFile.length != 0
          ? URL.createObjectURL(data.purchaseFile[0])
          : "",
    };
    dispatch(addNewPurchaseRequest(finalData));
    reset();
    showToast("success", "purchase successfully created");
    navigate("/purchase/purchaseLog");
  };

  const handleCancel = () => {
    reset();
  };

  const itemsOptions = {
    hardware: [
      {
        value: "HP - personal Laptop - model Elitebook 109-29",
        label: "HP - personal Laptop - model Elitebook 109-29",
      },
      {
        value: "Dell™2330d - Laser Printer",
        label: "Dell™2330d - Laser Printer",
      },
      {
        value: "Apple MacBook Pro - M1 Pro chip with 10‑core CPU",
        label: "Apple MacBook Pro - M1 Pro chip with 10‑core CPU",
      },
    ],
    software: [
      { value: "Microsoft Windows 10 Pro", label: "Microsoft Windows 10 Pro" },
      {
        value: "Adobe Creative Cloud All Apps - Institution wide License",
        label: "Adobe Creative Cloud All Apps - Institution wide License",
      },
    ],
    infrastructure: [
      {
        value: "Dell 2.5 HDD/SSD Tray Caddy",
        label: "Dell 2.5 HDD/SSD Tray Caddy",
      },
      {
        value: "HPE 96W Smart Storage Battery",
        label: "HPE 96W Smart Storage Battery",
      },
      { value: "HPE 2.4TB SAS HDD", label: "HPE 2.4TB SAS HDD" },
    ],
  };

  const requestTypeOptions = Object.keys(itemsOptions);
  const requestTypeOptionsFinalStructure = requestTypeOptions.map((item) => {
    return {
      value: item,
      label: item,
    };
  });

  const [selectedCategory, setSelectedCategory] = useState(
    requestTypeOptionsFinalStructure[0].value
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6" className={styles.inputTitle}>
            request title
          </Typography>
          <Controller
            name="requestTitle"
            control={control}
            defaultValue=""
            render={({ field }) => <TextField {...field} fullWidth />}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6" className={styles.inputTitle}>
            request type
          </Typography>

          <ControlSelector
            name="requestType"
            control={control}
            defaultValue={requestTypeOptionsFinalStructure[0].value}
            options={requestTypeOptionsFinalStructure}
            extendOnChange={(event) => {
              setSelectedCategory(event.target.value);
              setValue("itemName", itemsOptions[event.target.value][0].value);
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6" className={styles.inputTitle}>
            due date
          </Typography>
          <Controller
            name="dueDate"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField {...field} fullWidth type="date" />
            )}
          />
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h6" className={styles.inputTitle}>
            budget policy
          </Typography>
          <Controller
            name="budgeted"
            control={control}
            defaultValue={isBudgeted ? "budgeted" : "not budgeted"}
            render={({ field }) => (
              <ToggleButton
                {...field}
                fullWidth
                value="check"
                onClick={() => {
                  setIsBudgeted(!isBudgeted);
                }}
                sx={{
                  backgroundColor: !isBudgeted ? "#315CB9" : "#f3f6fd",
                  color: !isBudgeted ? "#ffffff" : "#a299ab",
                  height: "3.5rem",
                  "&:hover": {
                    backgroundColor: !isBudgeted ? "#315CB9" : "#f3f6fd",
                  },
                }}
              >
                {" "}
                {!isBudgeted ? "Budgeted" : "Not budgeted"}
              </ToggleButton>
            )}
          />
        </Grid>
        <Grid item xs={7}>
          <Typography variant="h6" className={styles.inputTitle}>
            item
          </Typography>
          <ControlSelector
            name="itemName"
            control={control}
            defaultValue={itemsOptions[selectedCategory][0].value}
            options={itemsOptions[selectedCategory]}
          />
        </Grid>

        <Grid item xs={2}>
          <Typography variant="h6" className={styles.inputTitle}>
            Quantity
          </Typography>
          <Controller
            name="itemsQuantity"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField {...field} fullWidth type="number" />
            )}
          />
        </Grid>

        <Grid item xs={6}>
          <Typography variant="h6" className={styles.inputTitle}>
            item description
          </Typography>
          <Controller
            name="itemDescription"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextareaAutosize
                minRows={3}
                {...field}
                placeholder="Add details.."
                className={styles.textArea}
              />
            )}
          />
        </Grid>

        <Grid item xs={6}>
          <Typography variant="h6" className={styles.inputTitle}>
            upload picture <small>(Optional)</small>
          </Typography>
          <div className={styles.fileUploadContainer}>
            <Controller
              name="file"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <FileUploadPlaceholder {...field} fullWidth imgFile={imgFile} />
              )}
            />
            <input
              type="file"
              {...register("purchaseFile")}
              name="purchaseFile"
              accept=".PNG,.jpeg"
              className={styles.uploadFile}
            />
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={styles.controlesContainer}>
            <Button
              variant="contained"
              onClick={handleCancel}
              className={styles.cancelBtn}
            >
              cancel
            </Button>
            <Button
              className={styles.submitBtn}
              type="submit"
              variant="contained"
            >
              create New
            </Button>
          </div>
        </Grid>
      </Grid>
    </form>
  );
};

export default CreatePurchaseForm;
