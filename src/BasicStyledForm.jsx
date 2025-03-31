import './BasicStyledForm.css';

function BasicStyledForm(){
    return(
        <div className="form-container">
            <h2>Contact us</h2>
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" placeholder="enter name" /> <br/>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" placeholder="enter email" /> <br />
                <label htmlFor="message" id="message" placeholder="enter Message" >Message: </label> <br />
                <textarea id="message" placeholder="enter message" /> <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default BasicStyledForm;