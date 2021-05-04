import React, {useState, useEffect} from 'react';
import Background4 from '../../images/img_4.jpg'
import Header from '../../components/Header/Header'
import axios from 'axios'

const ContactPage = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [data, setData] = useState(true)

  const submit = async () => {
    await axios.post(`http://localhost:5000/dg/send?NoiDung=${message}&NguoiDG=${name}&Email=${email}&phonenum=${phone}`)
      .then(response =>{
        setData(response.data)
        console.log('respondata',response.data)
      })

    console.log('data',name,phone, email, message)
  }
  return (
    <>
    <Header title="Contact Us" style={{display:'none'}} styleSize={{height:'50vh',minHeight:'550px'}}/>
      <section class="site-section">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h2 class="mb-5">Contact Form</h2>
          {/* <form> */}
                  <div class="row">
                    <div class="col-md-12 form-group">
                      <label for="name">Name</label>
                      <input type="text" name="name" id="name" class="form-control " value={name} onChange={(e)=>setName(e.target.value)}/>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 form-group">
                      <label for="phone">Phone</label>
                      <input type="text" name="phone" id="phone" class="form-control "value={phone} onChange={(e)=>setPhone(e.target.value)} />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 form-group">
                      <label for="email">Email</label>
                      <input type="email" name="email" id="email" class="form-control " value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 form-group">
                      <label for="message">Write Message</label>
                      <textarea name="message" id="message" class="form-control " cols="30" rows="8" value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6 form-group">
                      <input type="submit" value="Send Message" class="btn btn-primary" onClick={() => submit()} />
                    </div>
                  </div>
                {/* </form> */}
              </div>
              <div class="col-md-1"></div>
              <div class="col-md-5">
                <h3 class="mb-5">Paragraph</h3>
                <p class="mb-5"><img src={Background4} alt="" class="img-fluid"/></p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae labore aspernatur cumque inventore voluptatibus odit doloribus! Ducimus, animi perferendis repellat. Ducimus harum alias quas, quibusdam provident ea sed, sapiente quo.</p>
                <p>Ullam cumque eveniet, fugiat quas maiores, non modi eos deleniti minima, nesciunt assumenda sequi vitae culpa labore nulla! Cumque vero, magnam ab optio quidem debitis dignissimos nihil nesciunt vitae impedit!</p>
              </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default ContactPage;