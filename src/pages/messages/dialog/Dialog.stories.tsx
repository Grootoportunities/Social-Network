import { Dialog } from "./Dialog";
import { v1 } from "uuid";

export default {
  title: "Dialog",
  component: Dialog,
};

export const DialogWithNastya = () => <Dialog id={v1()} name={"Anastasia"} />;
