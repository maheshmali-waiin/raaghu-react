import React, { useState, useEffect, useRef } from "react";
import "./rds-file-uploader.css";
import RdsIcon from "../rds-icon/rds-icon";
import { useTranslation } from "react-i18next";
import RdsAvatar from "../rds-avatar";
import { t } from "i18next";

export interface RdsFileUploaderProps {
  Drop_Area_Top_Icon?: boolean;
  Drop_Area_Side_Icon?: boolean;
  Drop_Area_With_Upload_Button?: boolean;
  Drop_Area_With_Icon?: boolean;
  extensions: string;
  placeholder?: string;
  fileSizeLimitInMb?: number;
  label: string;
  onFileArray?: (files: any[]) => void;
  getFileUploaderInfo?: any;
  validation?: any[];
  onDeleteFile?: (id: any) => void;
  title?: string;
  isRequired?: boolean;
  showTitle?: boolean;
  showHint?: boolean;
  showThumbnail?: boolean;
  size?: "small" | "medium" | "large";
  colorVariant?: string;
  hintText?: string;
  multiple?: boolean;
  profilePic?: string;
  iconName?: string;
}

const RdsFileUploader = (props: RdsFileUploaderProps) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [validation, setValidation] = useState(props.validation || []);
  const [avatarImage, setAvatarImage] = useState<string | ArrayBuffer | null>(props.profilePic || null); // State to store the uploaded image
  const { t } = useTranslation();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const withIcon = props.iconName ? true : false;

  const size =
    props.size === "small"
      ? "form-control-sm"
      : props.size === "large"
      ? "form-control-lg"
      : "";

  const onchangehandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setSelectedFiles(files);
    const allowedExtensions = props.extensions.split(", ");
    const newFiles: File[] = [];
    const newValidation: { isError: boolean; hint: string }[] = [];

    files.forEach((file) => {
      const fileExtension = file.name.split(".").pop()?.toLowerCase();
      if (!allowedExtensions.includes(fileExtension || "")) {
        newFiles.push(file);
        newValidation.push({
          isError: true,
          hint: `File with extension '${fileExtension}' is not allowed`,
        });
        return;
      }

      const fileSizeInMB = file.size / (1024 * 1024); // Convert size to MB
      if (props.fileSizeLimitInMb != null) {
        if (fileSizeInMB > props.fileSizeLimitInMb) {
          newValidation.push({
            isError: true,
            hint: "File size exceeds the limit",
          });
          return;
        }
      }

      newFiles.push(file);
    });

    setSelectedFiles((prevFiles) => [...prevFiles, ...newFiles]);
    setValidation(newValidation);

    props.getFileUploaderInfo &&
      props.getFileUploaderInfo({
        files: newFiles,
      });

    if (props.Drop_Area_Top_Icon) {
      event.target.value = "";
    }
    if (newFiles.length > 0) {
      const reader = new FileReader();
      reader.onload = (e) => {
        
        setAvatarImage(e.target?.result as string);
      };
      reader.readAsDataURL(newFiles[0]);
    }
  };

  const onDelete = (index: number) => {
    const newFiles = selectedFiles.filter((_, i) => i !== index);
    setSelectedFiles(newFiles);
    props.onDeleteFile && props.onDeleteFile(index);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const onChangeHandlerForSingleSelection = (event: any) => {
    event.stopPropagation();
    const files = Array.from(event.target.files || []);
    const allowedExtensions = props.extensions.split(", ");
    const newFiles: File[] = [];
    const newValidation: { isError: boolean; hint: string }[] = [];

    files.forEach((file) => {
      const fileExtension = (file as File).name.split(".").pop()?.toLowerCase();
      if (!allowedExtensions.includes(fileExtension || "")) {
        newValidation.push({
          isError: true,
          hint: `File with extension '${fileExtension}' is not allowed`,
        });
        return;
      }

      const fileSizeInMB = (file as File).size / (1024 * 1024); // Convert size to MB
      if (props.fileSizeLimitInMb != null) {
        if (fileSizeInMB > props.fileSizeLimitInMb) {
          newValidation.push({
            isError: true,
            hint: "File size exceeds the limit",
          });
          return;
        }
      }
      newFiles.push(file as File);
    });

    // Set the selected files to the new files, erasing the previous selection
    setSelectedFiles(newFiles);
    setValidation(newValidation);

    if (newFiles.length > 0) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setAvatarImage(e.target?.result as string);
      };
      reader.readAsDataURL(newFiles[0]);
    }

    props.getFileUploaderInfo &&
      props.getFileUploaderInfo({
        files: newFiles,
      });
  };
  const onDeleteHandlerForSingleSelection = () => {
    setSelectedFiles([]);
    setAvatarImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Clear the file input
    }
  };

  useEffect(() => {
    setSelectedFiles(props.profilePic ? [new File([props.profilePic], "profilePic")] : []);
    //props.onFileArray && props.onFileArray(selectedFiles);
  }, [props.profilePic]);

  const [dragging, setDragging] = useState(false);

  const handleDragOver = (e: any) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (e: any) => {
    e.preventDefault();
    setDragging(false);
    const files = Array.from(e.dataTransfer.files) as File[];
    setSelectedFiles(files as File[]);
    if (files.length > 0) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target) {
          setAvatarImage(e.target.result as string);
        }
      };
      reader.readAsDataURL(files[0] as Blob);
    }
  };

  const renderFileUploader = () => {
    if (props.Drop_Area_Top_Icon) {
      return (
        <div>
          {props.showTitle && (
            <label className={"form-label label-gray"}>
              {props.title}
              {props.isRequired && <span className="text-danger ml-1">*</span>}
            </label>
          )}
          <label
            htmlFor="file-input"
            className={`multiUploader row mx-0 rounded-4 border-${
              props.colorVariant || "primary"
            } ${size}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            style={{ cursor: "pointer" }}
          >
            <div className="col-md-12 text-center">
              <RdsIcon
                colorVariant={props.colorVariant}
                height="20px"
                name="upload_data"
                stroke
                width="20px"
              />
              <div>
                {t("Drag and Drop your files or") || ""}{" "}
                <span className="text-primary text-semibold"> Browse</span>
              </div>
              <div className="fileFormat text-muted mt-2 text-semibold">
                {props.extensions}{" "}
              </div>
              <input
                id="file-input"
                data-testid="rds-file-uploader-input"
                className="d-none"
                type="file"
                accept={props.extensions}
                onChange={
                  props.multiple
                    ? onchangehandler
                    : onChangeHandlerForSingleSelection
                }
                multiple={props.multiple}
                required={props.isRequired ? true : false}
              />
            </div>
          </label>
          {props.showHint && (
            <div className="d-flex justify-content-start text-muted mt-1">
              <small>{props.hintText}</small>
            </div>
          )}
          {/* Display file names */}
          {selectedFiles.map((file, index) => (
            <div
              key={index}
              className="d-flex justify-content-between p-3 mt-3 fileName border"
            >
              <div className="d-flex gap-2 align-items-center">
                <span>
                  <RdsIcon
                    name={"file"}
                    height="16px"
                    width="16px"
                    stroke={true}
                    fill={false}
                  />
                </span>
                <span>{file.name}</span>
              </div>
              <div className="closeIcon">
                <span className="text-muted opacity-50">
                  {(file.size / 1048576).toFixed(2)} MB
                </span>
                <span className="iconbox ms-2" onClick={() => onDelete(index)}>
                  <RdsIcon
                    colorVariant="secondary"
                    name={"close_circle"}
                    height="16px"
                    width="16px"
                    stroke={true}
                    fill={false}
                  />
                </span>
              </div>
            </div>
          ))}
          {validation &&
            validation.map((val: any, index: number) => (
              <div key={index} className="">
                <small
                  className={`${val.isError ? "showError" : "noError d-none"}`}
                >
                  {val.isError && val.hint}
                </small>
              </div>
            ))}
        </div>
      );
    }

    if (props.Drop_Area_Side_Icon) {
      return (
        <div>
          {/* Multiple file uploader with side icon */}
          <div>
            {props.showTitle && (
              <label className={"form-label label-gray"}>
                {props.title}
                {props.isRequired && (
                  <span className="text-danger ml-1">*</span>
                )}
              </label>
            )}
          </div>
          <label
            htmlFor="file-input-side-icon"
            className={`align-items-center multiUploader row mx-0 rounded-4 border-${
              props.colorVariant || "primary"
            } ${size}`}
          >
            <div
              className={`col-md-12 col-lg-12 col-12 d-flex align-items-center justify-content-between ${
                dragging ? "dragging" : ""
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <div>
                <div>
                  {t("Drag and Drop your files or") || ""}{" "}
                  <span className="text-primary text-semibold"> Browse</span>
                </div>
                <div className="fileFormat text-muted mt-2 text-semibold">
                  {props.extensions}{" "}
                </div>
              </div>
              <span className="ms-2">
                <RdsIcon
                  colorVariant={props.colorVariant}
                  height="20px"
                  isAnimate
                  name="upload_data"
                  stroke
                  width="20px"
                />
              </span>
              <input
                data-testid="rds-file-uploader-input"
                className={`col-md-12 input mulinput d-none`}
                type="file"
                id="file-input-side-icon"
                accept={props.extensions}
                onChange={
                  props.multiple
                    ? onchangehandler
                    : onChangeHandlerForSingleSelection
                }
                multiple={props.multiple}
                required={props.isRequired ? true : false}
              />
            </div>
          </label>
          {props.showHint && (
            <div className="d-flex justify-content-start text-muted mt-1">
              <small>{props.hintText}</small>
            </div>
          )}

          {/* Display file names */}
          {selectedFiles.map((file, index) => (
            <div
              key={index}
              className="d-flex justify-content-between p-3 mt-3 fileName border"
            >
              <div className="d-flex gap-2 align-items-center">
                <span>
                  {props.showThumbnail && file.type.startsWith("image/") ? (
                    <img
                      src={URL.createObjectURL(file)}
                      alt={file.name}
                      height="120px"
                      width="120px"
                      className="file-thumbnail"
                    />
                  ) : (
                    <RdsIcon
                      name={"file"}
                      height="16px"
                      width="16px"
                      stroke={true}
                      fill={false}
                    />
                  )}
                </span>
                <span>{file.name}</span>
              </div>
              <div className="closeIcon">
                <span className="text-muted opacity-50">
                  {(file.size / 1048576).toFixed(2)} MB
                </span>
                <span className="iconbox ms-2" onClick={() => onDelete(index)}>
                  <RdsIcon
                    colorVariant="danger"
                    name={"delete"}
                    height="16px"
                    width="16px"
                    stroke={true}
                    fill={false}
                  />
                </span>
              </div>
            </div>
          ))}
          {validation &&
            validation.map((val: any, index: number) => (
              <div key={index} className="">
                <small
                  className={`${val.isError ? "showError" : "noError d-none"}`}
                >
                  {val.isError && val.hint}
                </small>
              </div>
            ))}
        </div>
      );
    }

    if (props.Drop_Area_With_Upload_Button) {
      return (
        <div>
          {/* Multiple file uploader with side icon */}
          <div>
            {props.showTitle && (
              <label className={"form-label label-gray"}>
                {props.title}
                {props.isRequired && (
                  <span className="text-danger ml-1">*</span>
                )}
              </label>
            )}
          </div>
          <label
            htmlFor="file-input-with-upload-button"
            className={`align-items-center multiUploader row mx-0 rounded-4 border-${
              props.colorVariant || "primary"
            } ${size}`}
          >
            <div
              className={`col-md-12 col-lg-12 col-12 d-flex align-items-center justify-content-between ${
                dragging ? "dragging" : ""
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              style={{ cursor: "pointer" }}
            >
              <span className="me-2 upload-icon-color">
                <RdsIcon
                  colorVariant={props.colorVariant}
                  height="20px"
                  isAnimate
                  name="upload_data"
                  stroke={true}
                  width="20px"
                />
              </span>
              <div className="flex-grow-1 text-center d-flex justify-content-end">
                <div>
                  {t("Drag and Drop your files") || ""}{" "}
                  <span className="text-muted mx-2"> or </span>
                  <button
                    className={`btn btn-primary btn-sm`}
                    onClick={() => document.getElementById("file")?.click()}
                  >
                    Upload Files
                  </button>
                </div>
              </div>
              <input
                data-testid="rds-file-uploader-input"
                className={`col-md-12 input mulinput d-none`}
                type="file"
                id="file-input-with-upload-button"
                accept={props.extensions}
                onChange={
                  props.multiple
                    ? onchangehandler
                    : onChangeHandlerForSingleSelection
                }
                multiple={props.multiple}
                required={props.isRequired ? true : false}
              />
            </div>
          </label>
          {props.showHint && (
            <div className="d-flex justify-content-start text-muted mt-1">
              <small>{props.hintText}</small>
            </div>
          )}

          {/* Display file names */}
          {selectedFiles.map((file, index) => (
            <div
              key={index}
              className="d-flex justify-content-between p-3 mt-3 fileName border"
            >
              <div className="d-flex gap-2 align-items-center">
                <span>
                  <RdsIcon
                    name={"file"}
                    height="16px"
                    width="16px"
                    stroke={true}
                    fill={false}
                  />
                </span>
                <span>{file.name}</span>
              </div>
              <div className="closeIcon">
                <span className="text-muted opacity-50">
                  {(file.size / 1048576).toFixed(2)} MB
                </span>
                <span className="iconbox ms-2" onClick={() => onDelete(index)}>
                  <RdsIcon
                    colorVariant="secondary"
                    name={"close_circle"}
                    height="16px"
                    width="16px"
                    stroke={true}
                    fill={false}
                  />
                </span>
              </div>
            </div>
          ))}
          {validation &&
            validation.map((val: any, index: number) => (
              <div key={index} className="">
                <small
                  className={`${val.isError ? "showError" : "noError d-none"}`}
                >
                  {val.isError && val.hint}
                </small>
              </div>
            ))}
        </div>
      );
    }

    if (props.Drop_Area_With_Icon) {
      return (
        <div className="">
        <div>
          {props.showTitle && (
            <label className={"form-label label-gray"}>
              {props.title}
              {props.isRequired && <span className="text-danger ml-1">*</span>}
            </label>
          )}
        </div>
        <div>
          <form>
            <div className={`align-items-center d-flex mt-1 flex-row`}>
              <label
                htmlFor="drop-area-with-icon"
                className={`border-end-0 align-items-center custom-file-button-rounded ${size}`}
              >
                  
                  {props.profilePic ? (
                    <RdsAvatar
                      profilePic={props.profilePic} // Ensure avatarImage is a string
                      size="largest"
                      border="dashed" withProfilePic = {true}
                    />
                  ) : (
                    <RdsAvatar 
                     iconName={props.iconName}
                      size="largest"
                      border="dashed"
                    />
                  )}
              </label>

              <input
                ref={fileInputRef}
                data-testid="rds-file-uploader-input"
                className={`col-md-12 input mulinput d-none text-${props.colorVariant}`}
                type="file"
                id="drop-area-with-icon"
                accept={props.extensions}
                onChange={onChangeHandlerForSingleSelection}
                multiple={false}
                required={props.isRequired ? true : false}
              />
            </div>
            <div className="d-flex justify-content-between">
              <div>
                {" "}
                {validation &&
                  validation.map((val: any, index: number) => (
                    <div key={index} className="">
                      <small
                        className={`${
                          val.isError ? "showError" : "noError d-none"
                        }`}
                      >
                        {val.isError && val.hint}
                      </small>
                    </div>
                  ))}
              </div>
            </div>
          </form>
        </div>
      </div>
      );
    }

    return (
      <div className="">
        <div>
          {props.showTitle && (
            <label className={"form-label label-gray"}>
              {props.title}
              {props.isRequired && <span className="text-danger ml-1">*</span>}
            </label>
          )}
        </div>
        <div>
          <form>
            <div className={`align-items-center d-flex mt-1 flex-row`}>
              <label
                htmlFor="file1"
                className={`border-end-0 align-items-center custom-file-button-rounded ${size}`}
              >
                  
                  {props.profilePic ? (
                  <RdsAvatar
                  profilePic={props.profilePic} // Ensure avatarImage is a string
                  size="largest"
                  border="dashed"
                  />
                ) : (
                  <RdsAvatar iconName="edit"  size="largest" border="dashed" />
                )}
              </label>

              <input
                ref={fileInputRef}
                data-testid="rds-file-uploader-input"
                className={`col-md-12 input mulinput d-none text-${props.colorVariant}`}
                type="file"
                id="file1"
                accept={props.extensions}
                onChange={onChangeHandlerForSingleSelection}
                multiple={false}
                required={props.isRequired ? true : false}
              />
            </div>
            <div className="d-flex justify-content-between">
              <div>
                {" "}
                {validation &&
                  validation.map((val: any, index: number) => (
                    <div key={index} className="">
                      <small
                        className={`${
                          val.isError ? "showError" : "noError d-none"
                        }`}
                      >
                        {val.isError && val.hint}
                      </small>
                    </div>
                  ))}
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  };

  return <>{renderFileUploader()}</>;
};

export default RdsFileUploader;
