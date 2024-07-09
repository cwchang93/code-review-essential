"use client";

import ArrowLeftSvgSrc from "./assets/arrow-left.svg";
import ArrowRightSvgSrc from "./assets/arrow-right.svg";
import { useTranslation } from "next-i18next";

interface Props {
  type: "left" | "right";
}

const DirectionOption = ({ type }: Props) => {
  const { t } = useTranslation();

  return (
    <>
      <div>{type === "left" ? t("left-message") : t("right-message")}</div>
      <div>{type === "left" ? <ArrowLeftSvgSrc /> : <ArrowRightSvgSrc />}</div>
    </>
  );
};

export default DirectionOption;
