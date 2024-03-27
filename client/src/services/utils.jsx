//abstract the user update/create form 

export const makeUserDataObject = (data) => {
  const userData = {
    first_name: data.get('firstName'),
    last_name: data.get('lastName'),
    date_of_birth: data.get('dateOfBirth'),
    phone_number: data.get('phone'),
    email: data.get('email'),
    // addresses: [{
    //   nickname: formData.nickname,
    //   address1: formData.address1,
    //   address2: formData.address2,
    //   city: formData.city,
    //   state: formData.state,
    //   zip: formData.zip
    // }]
    addresses: data.get('addresses')
  }
  return userData
}