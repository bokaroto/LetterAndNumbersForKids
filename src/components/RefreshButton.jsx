function RefreshButton() {
  const handleClick = () => {
    window.location.reload();
  };

  return <button onClick={handleClick}>Refresh</button>;
}

export default RefreshButton;
