import React from 'react'
import * as Survey from 'survey-react'

const Quiz = () => {
    var json = {
        questions: [
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
               },
               {
                "type": "checkbox",
                "name": "concerns",
                "title": "What is your main concerns?",
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
               },
               {
                "type": "text",
                "name": "hasPimple",
                "title": "Any pimple last week?",
                "isRequired": true
               },
               {
                "type": "boolean",
                "name": "hasRedScar",
                "title": "Do you have red scar on your skin?",
                "isRequired": true
               },
               {
                "type": "boolean",
                "name": "hasDeepScar",
                "title": "Do you have deep scars on your skin?",
                "isRequired": true
               },
               {
                "type": "radiogroup",
                "name": "yearPigment",
                "title": "How many years have you had pigmentation?",
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
               },
               {
                "type": "radiogroup",
                "name": "yearSkinProb",
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
               },
               {
                "type": "boolean",
                "name": "hasTopicalMed",
                "title": "Are you currently using any topical medications for your skin issue?",
                "isRequired": true
               },
               {
                "type": "checkbox",
                "name": "usedTopicalMed",
                "title": "What topical medicines do you use?",
                "isRequired": true,
                "choices": [
                 {
                  "value": "item1",
                  "text": "Tretinoin/ Retin-A"
                 },
                 {
                  "value": "item3",
                  "text": "Adapalene/ Differin"
                 },
                 {
                  "value": "item4",
                  "text": "Duac"
                 },
                 {
                  "value": "item5",
                  "text": "Benxyl Peroxide"
                 },
                 {
                  "value": "item6",
                  "text": "Epiduo"
                 },
                 {
                  "value": "item7",
                  "text": "Clindamycin"
                 },
                 {
                  "value": "item8",
                  "text": "I don't know"
                 }
                ],
                "hasOther": true
               },
               {
                "type": "boolean",
                "name": "hasOralMed",
                "title": "Are you currently using any oral medications?",
                "isRequired": true
               },
               {
                "type": "checkbox",
                "name": "usedOralMed",
                "title": "What Oral medicines do you use?",
                "isRequired": true,
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
                  "text": "I don't know"
                 }
                ],
                "hasOther": true
               },
               {
                "type": "radiogroup",
                "name": "hasAllergies",
                "title": "Do you have any allergies?",
                "isRequired": true,
                "choices": [
                 {
                  "value": "item3",
                  "text": "No"
                 }
                ],
                "hasOther": true,
                "otherText": "Yes (State)"
               },
               {
                "type": "radiogroup",
                "name": "hasSurgicalHistory",
                "title": "Do you have, or have had any medical or surgical history (Hypertension, Diabetes, Surgery, etc.)?",
                "isRequired": true,
                "choices": [
                 {
                  "value": "item1",
                  "text": "No"
                 }
                ],
                "hasOther": true,
                "otherText": "Yes (State)"
               },
               {
                "type": "comment",
                "name": "share",
                "title": "Would you like to share anything else with your doctor? (If no just left blank)"
               }
               
        ]
    };

    
    return (
       <Survey.Survey
        json={json}
        />
    )
}

export default Quiz