import {
  pageBackground,
  pageWrapper,
  cardClass,
  pageTitleClass,
  bodyText,
  primaryBtn
} from "./styles/common";

function App() {
  return (
    <div className={pageBackground}>
      <div className={pageWrapper}>
        <h1 className={pageTitleClass}>Dark Theme</h1>
        <p className={bodyText}>This is midnight minimal style</p>

        <div className={`${cardClass} mt-6`}>
          <p className={bodyText}>Card content</p>
          <button className={`${primaryBtn} mt-4`}>
            Click Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;