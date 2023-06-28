function Sidebar(props) {
    return (
      <div>
        <h2> My Sidebar </h2>
        <div className="sidebar-items">
          {props.children}
        </div>
      </div>
    );
  }
  export default Sidebar;