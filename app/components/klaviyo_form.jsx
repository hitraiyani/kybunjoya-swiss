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
  let loading_button_text, successful_header_text, successful_message, unsuccessful_header_text, unsuccessful_message,form_email,form_name,form_last_name,form_language,form_german_option,form_english_option,form_submit_text,form_small_text
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
    unsuccessful_header_text = "Thanks for your submition."
    unsuccessful_message = "A free copy of this book has already been sent to this Email. If you haven't receive any email, please contact us"
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
    unsuccessful_header_text = "Vielen Dank für Ihr Interesse an der kybun Joya Therapiebroschüre."
    unsuccessful_message = "Ein kostenloses Exemplar dieses Buches wurde bereits an diese E-Mail gesendet. Wenn Sie keine E-Mail erhalten haben, kontaktieren Sie uns bitte"
  }
  const [isActive, showLoading] = useState(true);
  const [submited, showEndMessage] = useState(true);
  const [registered, showEndMessage2] = useState(true);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    showLoading(!isActive);
    const get_options_klaviyo = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        revision: '2024-07-15',
        Authorization: 'Klaviyo-API-Key pk_2b2617e9aec18a60007bf77b72b4999f6d'
      }
    };
    
    fetch('https://a.klaviyo.com/api/profiles/?filter=equals(email,"'+formData.email+'")&page[size]=5', get_options_klaviyo)
      .then(response => response.json())
      .then(response => {
        /// OPTION 1 CUSTOMER NOT IN KLAVIYO DATABASE
        if(response.data.length == 0){ // email not in Klaviyo
          const post_profile_klaviyo = {
            method: 'POST',
            headers: {
              accept: 'application/json',
              revision: '2024-07-15',
              'content-type': 'application/json',
              Authorization: 'Klaviyo-API-Key pk_2b2617e9aec18a60007bf77b72b4999f6d'
            },
            body: JSON.stringify({
              data: {
                type: 'profile',
                attributes: {
                  email: formData.email,
                  first_name: formData.firstName,
                  last_name: formData.lastName
                }
              }
            })
          };
          fetch('https://a.klaviyo.com/api/profiles/', post_profile_klaviyo)
          .then(response => response.json())
          .then(response => {
            const post_profileInList_klaviyo = {
              method: 'POST',
              headers: {
                accept: 'application/json',
                revision: '2024-07-15',
                'content-type': 'application/json',
                Authorization: 'Klaviyo-API-Key pk_2b2617e9aec18a60007bf77b72b4999f6d'
              },
              body: JSON.stringify({data: [{type: 'profile', id: response.data.id}]})
            };
            fetch('https://a.klaviyo.com/api/lists/'+listID+'/relationships/profiles/', post_profileInList_klaviyo)
              .then(response => {
                removeElement("dr_kybunjoya_form");
                showEndMessage(!submited)
              })
              .catch(err => console.error(err));
          })
          .catch(err => console.error(err));
        /// OPTION 2 CUSTOMER IN KLAVIYO DATABASE
        } else {
          const user = response.data
          const search_profile_list = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              revision: '2024-07-15',
              Authorization: 'Klaviyo-API-Key pk_2b2617e9aec18a60007bf77b72b4999f6d'
            }
          };
          fetch('https://a.klaviyo.com/api/lists/'+listID+'/profiles/?filter=equals(email,"'+formData.email+'")&page[size]=5', search_profile_list)
            .then(response => response.json())
            .then(response => {
              /// OPTION 2.1 CUSTOMER IN LIST DATABASE
              if(response.data.length != 0){
                removeElement("dr_kybunjoya_form");
                showEndMessage2(!registered)
              /// OPTION 2.2 CUSTOMER NOT IN LIST DATABASE
              } else {
                const post_profileInList_klaviyo = {
                  method: 'POST',
                  headers: {
                    accept: 'application/json',
                    revision: '2024-07-15',
                    'content-type': 'application/json',
                    Authorization: 'Klaviyo-API-Key pk_2b2617e9aec18a60007bf77b72b4999f6d'
                  },
                  body: '{"data":[{"type":"profile","id":"'+user[0].id+'"}]}'
                };
                fetch('https://a.klaviyo.com/api/lists/'+listID+'/relationships/profiles', post_profileInList_klaviyo)
                  .then(response => response)
                  .then(response => {
                      removeElement("dr_kybunjoya_form");
                      showEndMessage(!submited)
                    }
                  )
                  .catch(err => console.error(err));
              }
            })
            .catch(err => console.error(err));
        }
      })
      .catch(err => console.error(err));
  };

  useEffect(() => {

  }, []);
  return (
    <>

      <form id='dr_kybunjoya_form' onSubmit={handleSubmit} className='relative transition-all ease-in'>
        <div id="loading_request_animation" className={`absolute left-2/4 top-1/3 transform_loading_magic ${isActive ? 'hidden' : ''}`}>
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
          />
        </div>

        <div>
          <select name="language" value={formData.language} onChange={handleChange} className='w-full border mb-5 h-14 rounded text-xl pl-4 select-greenKybunJoya dr_kybunjoya_input'>
            <option value="" disabled selected hidden>
              {form_language}
            </option>
            <option value="English">{form_english_option}</option>
            <option value="German">{form_german_option}</option>
          </select>
        </div>

        <button className='w-full border mb-5 h-14 rounded-full text-xl pl-4 placeholder-greenKybunJoya dr_kybunjoya_button' type="submit">{form_submit_text}</button>
        <p className='w-full  text-xs'>{form_small_text}</p>
      </form>
      <div className={`pt-3.5 pb-3.5 pr-3.5 pl-3.5 bg-emerald-600 text-white rounded-xl	 ${submited ? 'hidden' : ''}`} style={{backgroundColor: '#00795c'}}>
        <p className='text-center text-2xl font-bold'>{successful_header_text}</p>
        <p className='text-center text-lg'>{successful_message}</p>
      </div>
      <div className={`pt-3.5 pb-3.5 pr-3.5 pl-3.5 bg-emerald-600 text-white rounded-xl ${registered ? 'hidden' : ''}`} style={{backgroundColor: '#00795c'}}>
        <p className='text-center text-2xl font-bold'>{unsuccessful_header_text}</p>
        <p className='text-center text-lg'>{unsuccessful_message}</p>
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