import { ComponentType, Suspense } from "react";
import { Preloader } from "../components/Preloader/Preloader";

export const withSuspense =
  <T,>(Component: ComponentType<T>) =>
  (props: any) => (
    <Suspense fallback={<Preloader />}>
      <Component {...(props as T)} />
    </Suspense>
  );
