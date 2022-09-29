const MailingList = () => {
  return <div className="mailingList">
    <h3 className="mailingList__title">Mailing List</h3>
    <p className="mailingList__description">If you want to hear about future projects of mine, sign up for my mailing list here!</p>
    <input className="input" placeholder="example@gmail.com"></input>
    <button className="btn btn--green"><i className="fa-brands fa-github btn__icon"></i>Sign Up</button>
  </div>
}

export default MailingList;