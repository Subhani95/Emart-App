/*
Const.js file 
Vuetify validation is used through Rules method
Every validation rule against every field is stored in a variable 
Regex methods are used for the validation 
*/
const fnameRules = [
  (value) => !!value || 'Required.',
  (value) => (value || '').length >= 3 || ' First Letter Capital Max 20 characters',
  (value) => {
    const pattern = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/ //First Letter Capital Example: Ali minimun length Should be 3
    return pattern.test(value) || 'Invalid Fullname.'
  },
]
const emailRules = [
  (value) => !!value || 'Required.',
  (value) => (value || '').length <= 50 || 'Max 50 characters',
  (value) => {
    //email regex valid email example:abc@gmail.com
    const pattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return pattern.test(value) || 'Invalid e-mail.'
  },
]

const userNameRules = [
  //username minimun length is 5
  (value) => !!value || 'Required.',
  (value) => (value || '').length >= 5 || 'Max 5 characters',
  (value) => {
    //regex valid: Ali123
    const pattern = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/
    return pattern.test(value) || 'Invalid Username Maximum 5 Characters.'
  },
]
const passwordRules = [
  //password maximum lenght is 8 or Equal to 8
  (value) => !!value || 'Required.',
  (value) => (value || '').length >= 8 || 'Max 8 Digits One Capital Letter and one Digit is Neccessary',
  (value) => {
    //VALID regx expression is Hsys16_98
    const pattern = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/
    return (
      pattern.test(value) ||
      'Invalid password.Maximum Character 8 must include one Digit and An Alphabet'
    )
  },
]
const phoneNumber1 = [
  //phone number should be upto 11 digits only number
  (value) => !!value || 'Required.',
  (value) => (value || '').length == 11 || 'Max 11 Digits Format(01224567219)',
  (value) => {
    //valid :03000440105
    const pattern = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\\./0-9]*$/
    return pattern.test(value) || 'Invalid phonenumber.'
  },
]
const checkboxRules = [(value) => !!value || 'You must agree to continue!']

//exporting all regex
export {
  passwordRules,
  userNameRules,
  emailRules,
  fnameRules,
  phoneNumber1,
  checkboxRules,
}
