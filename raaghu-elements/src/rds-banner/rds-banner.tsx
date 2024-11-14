import React from "react";
import "./rds-banner.css";
import RdsIcon from "../rds-icon";
import RdsButton from "../rds-button/rds-button";

export interface RdsBannerProps {
  bannerText?: string;
  sticky?: boolean;
  position?: "top" | "bottom";
  colorVariant?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  icon?: string;
  closeButton?: boolean;
  textAlign: "start" | "end" | "center";
  iconHeight: string;
  iconWidth: string;
  iconStroke: boolean;
  iconFill: boolean;
  imageUrl?: string;
  raaghuBanner?: boolean;
  headingText?: string;
  titleText?: string;
  subTitleText?: string;
  firstButtonText?: string;
  secondButtonText?: string;
  showFirstButton?: boolean;
  showSecondButton?: boolean;
  firstButtonIcon?: string;
  secondButtonIcon?: string;
}

const RdsBanner = (props: RdsBannerProps) => {
  const onButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Button clicked", e);
  };
  const iconColor = props.colorVariant != "light" ? "light" : "dark";
  const iconStroke = props.iconStroke === false ? false : true;
  const position =
    props.position === "top" ? " fixed-top" : " fixed-bottom bottom-0";
  const textAlign = props.textAlign ? "justify-content-" + props.textAlign : "";
  const sticky = props.sticky === true ? `m-auto ${position} ` : "";
  const bgColor = props.colorVariant
    ? "alert-" + `${props.colorVariant} text-dark`
    : "";
  const classes = ` ${textAlign} ${sticky} ${bgColor} `;
  const bannerImage = props.imageUrl
    ? props.imageUrl
    : "../../../stories/assets/raaghubannerimage.png";
  return (
    <>
     {!props.raaghuBanner &&( <div
        className={`alert d-flex align-items-center fade show ${classes}`}
        role="alert"
      >
        <span className="ps-2 d-flex align-items-center">
          {props.icon && (
            <RdsIcon
              classes="fs-6 me-2"
              colorVariant={iconColor}
              name={props.icon}
              width={props.iconWidth || "20px"}
              height={props.iconHeight || "20px"}
              fill={props.iconFill || false}
              stroke={iconStroke}
            ></RdsIcon>
          )}
          {props.bannerText}
        </span>
      </div>
     )}
      {props.raaghuBanner &&(<div className="challenge-banner"
      style={{ backgroundImage: `url(${bannerImage})`,
              backgroundRepeat:"no-repeat",
              backgroundSize:"cover" }}>
        <div className="content">
          <h2 className="heading">{props.headingText}</h2>
          <h1 className="sub-heading">{props.titleText}</h1>
          <p className="sub-title">
            {props.subTitleText}
          </p>
          <div className="buttons">
            {props.showFirstButton &&(<RdsButton
                        label={props.firstButtonText}
                        type="button"
                        colorVariant={props.colorVariant}
                        size="medium"
                        dataTestId={props.firstButtonText}
                         icon={props.firstButtonIcon}
                         isBanerButton={true}
                         onClick={(e) => onButtonClick(e)}
                    ></RdsButton>)}
           {props.showSecondButton &&( <RdsButton
                        label={props.secondButtonText}
                        type="button"
                        colorVariant={props.colorVariant}
                        size="medium"
                        dataTestId={props.secondButtonText}
                        icon={props.secondButtonIcon}
                        isBanerButton={true}
                        onClick={(e) => onButtonClick(e)}
                    ></RdsButton>)}
          </div>
        </div>
      </div>)}
    </>
  );
};

export default RdsBanner;
