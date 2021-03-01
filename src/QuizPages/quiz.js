import React from 'react'
import * as Survey from 'survey-react'

const Quiz = () => {
    var json = {
        pages: [
            {
             "name": "Problem page",
             "elements": [
              {
               "type": "checkbox",
               "name": "problems",
               "title": "Where is the problem?",
               "isRequired": true,
               "choices": [
                {
                 "value": "item1",
                 "text": "Face"
                },
                {
                 "value": "item2",
                 "text": "Neck"
                },
                {
                 "value": "item3",
                 "text": "Body"
                }
               ]
              }
             ]
            },
            {
             "name": "Main Concern page",
             "elements": [
              {
               "type": "checkbox",
               "name": "mainConcerns",
               "title": "What is your main concerns",
               "isRequired": true,
               "choices": [
                {
                 "value": "item1",
                 "text": "Acne"
                },
                {
                 "value": "item2",
                 "text": "Scars"
                },
                {
                 "value": "item3",
                 "text": "Pigment"
                },
                {
                 "value": "item4",
                 "text": "Uneven Skintone"
                },
                {
                 "value": "item5",
                 "text": "Whitening "
                },
                {
                 "value": "item6",
                 "text": "Anti Aging"
                }
               ],
               "hasOther": true,
               "hasNone": true
              }
             ]
            },
            {
             "name": "Pimple page",
             "elements": [
              {
               "type": "radiogroup",
               "name": "hasPimple",
               "title": "Any pimple/s last week?",
               "choices": [
                {
                 "value": "item1",
                 "text": "No"
                }
               ],
               "hasOther": true,
               "otherText": "Yes (Amount)"
              }
             ]
            },
            {
             "name": "Red Scar Page",
             "elements": [
              {
               "type": "boolean",
               "name": "hasRedScar",
               "title": "Do you have any red scar on your skin?",
               "isRequired": true
              }
             ],
             "visibleIf": "{mainConcerns} = ['item2']",
             "enableIf": "{mainConcerns} = ['item2']"
            },
            {
             "name": "Deep Scar",
             "elements": [
              {
               "type": "boolean",
               "name": "hasDeepScar",
               "title": "Do you have deep scar on your skin?",
               "isRequired": true
              }
             ],
             "visibleIf": "{mainConcerns} = ['item2']",
             "enableIf": "{mainConcerns} = ['item2']"
            },
            {
             "name": "Pigmentation Page",
             "elements": [
              {
               "type": "radiogroup",
               "name": "hasPigments",
               "title": "How many years have you had pigmentation?",
               "isRequired": true,
               "choices": [
                {
                 "value": "item2",
                 "text": "More than a year"
                },
                {
                 "value": "item3",
                 "text": "Less than a year"
                }
               ]
              }
             ],
             "visibleIf": "{mainConcerns} = ['item3']",
             "enableIf": "{mainConcerns} = ['item3']"
            },
            {
             "name": "Skin problem year page",
             "elements": [
              {
               "type": "radiogroup",
               "name": "hasSkinProblem",
               "title": "How many years have you had skin problem?",
               "isRequired": true,
               "choices": [
                {
                 "value": "item1",
                 "text": "More than a year"
                },
                {
                 "value": "item2",
                 "text": "Less than a year"
                }
               ]
              }
             ]
            },
            {
             "name": "Topical Medication Page",
             "elements": [
              {
               "type": "boolean",
               "name": "hasTopicalMed",
               "title": "Are you currently using any topical medications for your skin issue?",
               "isRequired": true
              },
              {
               "type": "checkbox",
               "name": "usedTopicalMed",
               "visibleIf": "{hasTopicalMed} = true",
               "title": "What topical medicines do you use?",
               "enableIf": "{hasTopicalMed} = true",
               "requiredIf": "{hasTopicalMed} = true",
               "choices": [
                {
                 "value": "item1",
                 "text": "Tretinoin/ Retin-A"
                },
                {
                 "value": "item2",
                 "text": "Adapalene/ Differin"
                },
                {
                 "value": "item3",
                 "text": "Duac"
                },
                {
                 "value": "item4",
                 "text": "Benxyl Peroxide"
                },
                {
                 "value": "item5",
                 "text": "Epiduo"
                },
                {
                 "value": "item6",
                 "text": "Clindamycin"
                },
                {
                 "value": "item7",
                 "text": "I don't know"
                }
               ],
               "hasOther": true
              }
             ]
            },
            {
             "name": "Oral Medication Page",
             "elements": [
              {
               "type": "boolean",
               "name": "hasOralMed",
               "title": "Are you currently using any oral medications?"
              },
              {
               "type": "checkbox",
               "name": "question5",
               "visibleIf": "{hasOralMed} = true",
               "title": "What Oral medicines do you use?",
               "enableIf": "{hasOralMed} = true",
               "requiredIf": "{hasOralMed} = true",
               "choices": [
                {
                 "value": "item1",
                 "text": "Doxycycline"
                },
                {
                 "value": "item2",
                 "text": "Minocycline"
                },
                {
                 "value": "item3",
                 "text": "Tetracycline"
                },
                {
                 "value": "item4",
                 "text": "Bactrim"
                },
                {
                 "value": "item5",
                 "text": "Roaccutane/ Isotretinoin"
                },
                {
                 "value": "item6",
                 "text": "Clindamycin"
                },
                {
                 "value": "item7",
                 "text": "Erythromycin"
                },
                {
                 "value": "item8",
                 "text": "I don't know "
                }
               ],
               "hasOther": true
              }
             ]
            },
            {
             "name": "Allergies Page",
             "elements": [
              {
               "type": "radiogroup",
               "name": "hasAllergies",
               "title": "Do you have any allergies",
               "isRequired": true,
               "choices": [
                {
                 "value": "item2",
                 "text": "No"
                }
               ],
               "hasOther": true,
               "otherText": "Yes (State)"
              }
             ]
            },
            {
             "name": "Surgical History Page",
             "elements": [
              {
               "type": "radiogroup",
               "name": "hasSurgicalHistory",
               "title": "Do you have, or have had any medical or surgical history (Hypertension, Diabetes, Surgery, etc.)?",
               "choices": [
                {
                 "value": "item1",
                 "text": "No"
                }
               ],
               "hasOther": true,
               "otherText": "Yes (State)"
              }
             ]
            },
            {
             "name": "Share with Doctor Page",
             "elements": [
              {
               "type": "comment",
               "name": "shareDoctor",
               "title": "Would you like to share anything else with your doctor? (If no you can just left blank)",
               "placeHolder": "comment"
              }
             ]
            }
           ],
        "showPageTitles": false,
        "showQuestionNumbers": "off"
    };

    
    return (
       <Survey.Survey
        json={json}
        />
    )
}

export default Quiz