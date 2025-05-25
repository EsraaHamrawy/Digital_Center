import styles from "./createCorrsForm.module.css";
import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Button,
  Grid,
  Typography,
  TextareaAutosize,
} from "@mui/material";
import FileUploadPlaceholder from "../fileUploadPlaceholder/fileUploadPlaceholder.component";
import { useDispatch } from "react-redux";
import { setIncommingCorrs } from "../../../appState/slices/corrsSlice";
import { generateUniqueId } from "../../../helpers/utilities/generateUniqueId";
import { todayDate } from "../../../helpers/utilities/todayDate";
import { showToast } from "../../../helpers/utilities/showToast";
import { useNavigate } from "react-router-dom";
import ControlSelector from "../../general/dynamicControler/ControlSelector";

const CreateCorrsForm = () => {
  const { control, handleSubmit, reset, register, watch } = useForm();
  const pdfFile = watch("corrsFile");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const finalData = {
      ...data,
      id: generateUniqueId(),
      corrsFile: "",
      date: todayDate(),
      reg: "23-54",
    };
    dispatch(setIncommingCorrs(finalData));
    reset();
    showToast("success", "corrs successfully created");
    navigate("/correspondences/incommingcorrsLogs");
  };

  const handleCancel = () => {
    reset();
  };

  const incomingFromOptions = [
    { value: "National Oil Company", label: "National Oil Company" },
    {
      value: "International Global Logistics",
      label: "International Global Logistics",
    },
    { value: "Gulf Airlines", label: "Gulf Airlines" },
    { value: "Target Integrated System", label: "Target Integrated System" },
    {
      value: "Red Sea for Import and Export Services",
      label: "Red Sea for Import and Export Services",
    },
  ];

  const corrsTypeOptions = [
    { value: "general", label: "General" },
    { value: "secretariat", label: "Secretariat" },
  ];

  const receivedWayOptions = [
    { value: "email", label: "Email" },
    { value: "fax", label: "Fax" },
    { value: "postMail", label: "Post Mail" },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6" className={styles.inputTitle}>
            Correspondence Title
          </Typography>
          <Controller
            name="corrsTitle"
            control={control}
            defaultValue=""
            render={({ field }) => <TextField {...field} fullWidth />}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6" className={styles.inputTitle}>
            Correspondence Number <small>(ID)</small>
          </Typography>
          <Controller
            name="corrsNumber"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField {...field} fullWidth type="number" />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6" className={styles.inputTitle}>
            Incoming From
          </Typography>
          <ControlSelector
            name="incomingFrom"
            control={control}
            defaultValue="National Oil Company"
            options={incomingFromOptions}
          />
        </Grid>

        <Grid item xs={6}>
          <Typography variant="h6" className={styles.inputTitle}>
            Correspondence type
          </Typography>
          <ControlSelector
            name="corrsType"
            control={control}
            defaultValue={corrsTypeOptions[0].value}
            options={corrsTypeOptions}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6" className={styles.inputTitle}>
            How It Was Received
          </Typography>
          <ControlSelector
            name="receivedWay"
            control={control}
            defaultValue="email"
            options={receivedWayOptions}
          />
        </Grid>

        <Grid item xs={6}>
          <Typography variant="h6" className={styles.inputTitle}>
            Correspondence Details
          </Typography>
          <Controller
            name="corrsDetails"
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
            upload correspondence
          </Typography>
          <div className={styles.fileUploadContainer}>
            <FileUploadPlaceholder pdfFile={pdfFile} />
            <input
              type="file"
              {...register("corrsFile")}
              name="corrsFile"
              accept=".pdf"
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

export default CreateCorrsForm;
