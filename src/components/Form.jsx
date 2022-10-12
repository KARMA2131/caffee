function Form() {

  return(
    <div className="container" id="Form">
      <p><b>Reserve</b>  a table, ask for today's special or just send us a message:</p>
      <form>
        <p><input type="text" placeholder="Name" name="Name"/></p>
        <p><input type="number" placeholder="How many people" name=""/></p>
        <p><input type="date" /></p>
        <p><input type="text" placeholder="Message \ Special requirements" id="" /></p>
        <p><button type="submit">SEND MESSAGE</button></p>
      </form>
    </div>
  )
}

export default Form;