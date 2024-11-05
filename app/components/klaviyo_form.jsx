import React, { useEffect,useState } from 'react';

export function Klaviyo_form({klaviyo_listID,set_language}) {
  const listID = klaviyo_listID;
  const spoke_language = set_language;
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    language: ''
  });
  let loading_button_text, successful_header_text, successful_message, required_message,form_email,form_name,form_last_name,form_language,form_german_option,form_english_option,form_submit_text,form_small_text
  if (spoke_language == "en") {
    form_email = "Email"
    form_name = "Name"
    form_last_name = "Last Name"
    form_language = "Language"
    form_german_option = "German"
    form_english_option = "English"
    form_submit_text = "Free Download"
    form_small_text = "I agree that by downloading the free medical brochure, my e-mail address and name may be used for internal marketing purposes.  I can retract this consent at any time."
    loading_button_text= "Processing..."
    successful_header_text = "Thank you for your interest in the kybun Joya therapy brochure."
    successful_message = "We will send you the link to download the therapy brochure to your e-mail address."
    required_message = {name:"Please enter your name", lastname: "Please enter your last name", email: "Please enter your email",language:"Please select your language"}
  } else {
    form_email = "E-mail"
    form_name = "Vorname"
    form_last_name = "Nachname"
    form_language = "Sprache"
    form_german_option = "Deutsh"
    form_english_option = "English"
    form_submit_text = "Kostenlos herunterladen"
    form_small_text ="Durch das Herunterladen der kostenlosen medizinischen Broschüre erkläre ich mich damit einverstanden, dass meine E-Mail-Adresse und mein Name zu internen Marketingzwecken genutzt werden dürfen. Ich kann diese Einwilligung jederzeit widerrufen."
    loading_button_text= "Bearbeitung..."
    successful_header_text = "Vielen Dank für Ihr Interesse an der kybun Joya Therapiebroschüre."
    successful_message = "Wir senden Ihnen den Link zum Download der Therapiebroschüre per E-Mail zu."
    required_message = {name:"Bitte Ihren Namen eingeben", lastname: "Bitte Ihren Nachnamen eingeben", email: "Bitte geben Sie Ihre E-Mail ein",language:"Bitte wählen Sie eine Sprache"}
  }
  const [isLoading, showLoading] = useState(true);
  const [submited, showEndMessage] = useState(true);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    showLoading(!isLoading);
    const get_options_klaviyo = {
      method: 'GET',
      headers: {
        accept: 'application/vnd.api+json',
        revision: '2024-10-15',
        'content-type': 'application/vnd.api+json'
      }
    };

    const options = {
      method: 'POST',
      headers: {revision: '2024-10-15', 'content-type': 'application/vnd.api+json'},
      body: '{"data":{"type":"subscription","attributes":{"profile":{"data":{"type":"profile","attributes":{"properties":{"Language":"'+formData.language+'"},"email":"'+formData.email+'","first_name":"'+formData.firstName+'","last_name":"'+formData.lastName+'"}}},"custom_source":"sub_form_website"},"relationships":{"list":{"data":{"type":"list","id":"'+listID+'"}}}}}'
    };
    fetch('https://a.klaviyo.com/client/subscriptions?company_id=Xpi5VF', options)
    .then(res => {
      removeElement("dr_kybunjoya_form");
      showEndMessage(!submited)
    })
      .catch(err => console.error(err));
  };
  const handleInvalid = (event, message) => {
    event.target.setCustomValidity(message);
  };

  const handleInput = (event) => {
    event.target.setCustomValidity(''); // Clear the custom message when typing
  };
  useEffect(() => {


  }, []);
  return (
    <>
      <form id='dr_kybunjoya_form' onSubmit={handleSubmit} className='relative transition-all ease-in'>
        <div id="loading_request_animation" className={`absolute left-2/4 top-1/3 transform_loading_magic ${isLoading ? 'hidden' : ''}`}>
          <div className="flex items-center justify-center">
            <button type="button" className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-emerald-900 hover:bg-emerald-800 transition ease-in-out duration-150 cursor-not-allowed" disabled="">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {loading_button_text}
            </button>
          </div>
        </div>
        <div>
          <input
            className='w-full border mb-5 h-14 rounded text-xl pl-4 placeholder-greenKybunJoya dr_kybunjoya_input'
            placeholder={form_email}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            onInvalid={(e) => handleInvalid(e, required_message.email)}
            onInput={handleInput}
          />
        </div>

        <div>
          <input
            className='w-full border mb-5 h-14 rounded text-xl pl-4 placeholder-greenKybunJoya dr_kybunjoya_input'
            placeholder={form_name}
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            onInvalid={(e) => handleInvalid(e, required_message.name)}
            onInput={handleInput}
          />
        </div>

        <div>
          <input
            className='w-full border mb-5 h-14 rounded text-xl pl-4 placeholder-greenKybunJoya dr_kybunjoya_input'
            placeholder={form_last_name}
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            onInvalid={(e) => handleInvalid(e, required_message.lastname)}
            onInput={handleInput}
          />
        </div>

        <div>
          <select name="language" value={formData.language} onChange={handleChange} className='w-full border mb-5 h-14 rounded text-xl pl-4 select-greenKybunJoya dr_kybunjoya_input' required onInvalid={(e) => handleInvalid(e, required_message.language)}
            onInput={handleInput}>
            <option value="" disabled selected hidden>
              {form_language}
            </option>
            <option value="EN">{form_english_option}</option>
            <option value="DE">{form_german_option}</option>
          </select>
        </div>

        <button className='w-full border mb-5 h-14 rounded-full text-xl pl-4 placeholder-greenKybunJoya dr_kybunjoya_button' type="submit">{form_submit_text}</button>
        <p className='w-full  text-xs'>{form_small_text}</p>
      </form>
      <div className={`pt-3.5 pb-3.5 pr-3.5 pl-3.5 bg-emerald-600 text-white rounded-xl	 ${submited ? 'hidden' : ''}`} style={{backgroundColor: '#00795c'}}>
        <p className='text-center text-2xl font-bold'>{successful_header_text}</p>
        <p className='text-center text-lg'>{successful_message}</p>
      </div>
    </>
  );
}
function removeElement(oldElementId) {
  var oldElement = document.getElementById(oldElementId);

  if (oldElement) {
      // Add fade-out class to remove element with animation
      oldElement.classList.add('fade-out-leave');

      // Wait for the fade-out animation to finish
      oldElement.addEventListener('transitionend', function() {
          oldElement.remove(); // Remove old element
      });
  }
}