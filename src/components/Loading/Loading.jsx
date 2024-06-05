import style from "./Loading.module.css";
export default function Loading() {
  return (
    <section className={style.loadingArea}>
      <div className={style.loading}></div>
    </section>
  );
}
