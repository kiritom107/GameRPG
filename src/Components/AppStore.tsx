import { ModalProps } from "antd";

import { ReactElement } from "react";

export interface ModalType extends Partial<ModalProps> {
  id?: string;
  title?: string;
  actions?: { text: string; variant: string; onPress: () => void }[];
  body?: (() => ReactElement) | ReactElement;
  modal?: JSX.Element;
}

class AppStore {
  openModal!: (modal: ModalType) => void;
  closeModal!: (id: string) => void;
  closeAllModal!: () => void;

  zoom: any = (window.innerWidth / 1920) * 100;
}
export default new AppStore();
