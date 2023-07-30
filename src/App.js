import DefaultFooter from "./components/layout/footer";
import DefaultSidebar from "./components/layout/sidebar";
import DefaultTopBar from "./components/layout/topbar";

function App() {
  return (
    <>
      <DefaultTopBar>
        <DefaultFooter>
          <DefaultSidebar>
            <h1>React 18 clean!</h1>
          </DefaultSidebar>
        </DefaultFooter>
      </DefaultTopBar>
    </>
  );
}

export default App;
