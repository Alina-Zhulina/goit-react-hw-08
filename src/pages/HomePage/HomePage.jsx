import css from "./HomePage.module.css";
const HomePage = () => {
  return (
    <>
      <div className={css.container}>
        <h1 className={css.title}>My PhoneBook</h1>
        <p className={css.subtitle}>Manage your contacts easily</p>
      </div>
    </>
  );
};

export default HomePage;
