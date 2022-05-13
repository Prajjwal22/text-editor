export default function ClearData () {

    function clearData() {
        localStorage.clear();
        window.location.reload(true);
      }
    

    return (
        <button className="button" type="button" onClick={clearData}>Clear Data</button>
    )
}