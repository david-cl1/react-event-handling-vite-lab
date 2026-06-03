// Code PasswordInput Component Here

function PasswordInput (){
  function handleChange () {
    console.log("Entering password…")
    }


    return(
        <form>
      <input
        type = 'password'
        onChange={()=>handleChange()} 
      />
    </form>
    )
}

export default PasswordInput;