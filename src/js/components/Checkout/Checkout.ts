import type { CheckoutType } from "./Checkout.types";

export default function Checkout(root: HTMLDialogElement): CheckoutType {
  const formEl: HTMLElement = root.querySelector("[data-form]")!;

  const closed: Array<() => void> = [];
  const submitted: Array<(name: string) => void> = [];

  formEl.addEventListener("submit", handleSubmit);

  function open(): void {
    root.showModal();
  }

  function close(): void {
    root.close();
    closed.forEach((el) => el());
  }

  function handleSubmit(e: SubmitEvent): void {
    e.preventDefault();

    close();

    const formData: FormData = new FormData(e.target as HTMLFormElement);
    submitted.forEach((el) => el(formData.get("full-name") as string));
  }

  return {
    open,
    closed,
    submitted,
  };
}
