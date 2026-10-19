// Per-service FAQ content, transcribed word-for-word from the
// "MBrace - Website Content" Google Doc, keyed by ServiceItem.slug.
export type ServiceFaqGroup = { heading: string; faqs: { question: string; answer: string }[] };
export type ServiceFaqData = { label: string; heading: string; highlight: string; description: string; groups: ServiceFaqGroup[] };

export const serviceFaqs: Record<string, ServiceFaqData> = {
  "high-risk-pregnancy-care": {
    "label": "Frequently Asked Questions",
    "heading": "Your Queries",
    "highlight": "Answered by Experts.",
    "description": "What women most often ask after being told their pregnancy needs extra attention.",
    "groups": [
      {
        "heading": "Understanding High-Risk Pregnancy",
        "faqs": [
          {
            "question": "Does high risk mean something will go wrong?",
            "answer": "No. The label means closer monitoring, so changes are found and managed early. It is also common: a 2023 analysis of national survey data found 49.4% of expectant mothers in India had one or more factors listed in national screening guidelines.\\* Many go on to a healthy birth with the right support."
          },
          {
            "question": "Does high risk mean I did something wrong?",
            "answer": "No. Most factors, such as an existing illness, twins, age or an earlier complication, are outside your control. The label simply tells your doctors where to focus, and they can suggest practical steps, such as managing sugar or blood pressure, that may lower some risks."
          },
          {
            "question": "Is an IVF pregnancy always high risk?",
            "answer": "Not always. Conception after fertility treatment is often watched more closely, particularly with twins, maternal age over 35 or an underlying condition. Your obstetrician assesses your individual situation and sets the level of monitoring accordingly, rather than adding extra checks to every IVF pregnancy by default."
          },
          {
            "question": "Can a pregnancy become high risk later?",
            "answer": "Yes. Gestational diabetes, raised blood pressure, pre-eclampsia or growth concerns can appear in the second or third trimester, even after a smooth start. Routine antenatal visits are designed to pick these up, and your plan is updated as soon as a change is found."
          }
        ]
      },
      {
        "heading": "Daily Life & Check-Ups",
        "faqs": [
          {
            "question": "When should I see a high-risk pregnancy specialist?",
            "answer": "Book a visit with a high-risk pregnancy specialist in Hyderabad as soon as a factor is identified. If you already have diabetes, thyroid disease or high blood pressure, a review before conceiving is even better, as medicines and levels can be adjusted early."
          },
          {
            "question": "Will I need bed rest?",
            "answer": "Usually not. Strict bed rest is rarely recommended now, because it has not been shown to prevent most complications and can raise the risk of blood clots. Your obstetrician may advise reducing certain activities in specific situations, such as bleeding or early cervical changes."
          },
          {
            "question": "Can I keep working or travel?",
            "answer": "Most women can, with adjustments. Your obstetrician considers your condition, your stage and the nature of your work or journey. Long trips late in pregnancy, or travel far from medical care, may be discouraged when there is a risk of early labour or rising blood pressure."
          }
        ]
      },
      {
        "heading": "Delivery & Newborn",
        "faqs": [
          {
            "question": "Will I need a caesarean?",
            "answer": "Not necessarily. Many women with a high-risk pregnancy have a vaginal birth. The mode and timing depend on your condition, the baby's wellbeing and your history, and your obstetrician discusses vaginal birth, induction and C-section with you before any decision is made."
          },
          {
            "question": "What if my baby needs NICU care?",
            "answer": "Specialist newborn care is available in the same hospital. M'Brace has NICU infrastructure with high-end neonatal ventilation support, and when extra help may be needed, for example after a preterm birth, neonatologists can be involved before delivery so preparations are made in advance."
          },
          {
            "question": "Which symptoms need urgent attention?",
            "answer": "Come in or call promptly for vaginal bleeding, leaking fluid, a severe headache, blurred vision, severe abdominal pain, a seizure, regular tightenings before 37 weeks or reduced fetal movements. M'Brace has 24/7 emergency and transport support through Kamineni Hospitals."
          }
        ]
      },
      {
        "heading": "About M'Brace",
        "faqs": [
          {
            "question": "Can I move my care to M'Brace mid-pregnancy?",
            "answer": "Yes. Women can transfer at any stage, including after a recent move to Hyderabad or when seeking a second opinion. Your obstetrician reviews your earlier records at the first visit and continues the plan from where it stands, rather than starting again."
          },
          {
            "question": "Is high-risk pregnancy care available in LB Nagar and King Koti?",
            "answer": "Yes. M'Brace offers high-risk pregnancy care in LB Nagar and high-risk pregnancy care in King Koti, with identical services at both Kamineni Hospitals units. Choose whichever is easier to reach, since antenatal visits become more frequent in the later months."
          },
          {
            "question": "What should I bring to my first visit?",
            "answer": "Bring earlier scan reports, blood test results, prescriptions and discharge summaries from previous pregnancies or surgery. If you conceived through fertility treatment, include your treatment summary. These records help your obstetrician understand your history and avoid repeating tests unnecessarily."
          },
          {
            "question": "Is insurance accepted?",
            "answer": "Yes. Kamineni Hospitals' Hyderabad units are recognised by 150+ insurance TPAs for cashless and reimbursement-based obstetric treatment. Check your policy's maternity cover and confirm empanelment with the billing team before admission."
          }
        ]
      }
    ]
  },
  "maternity-care": {
    "label": "Frequently Asked Questions",
    "heading": "Your Queries",
    "highlight": "Answered by Experts.",
    "description": "What expectant mothers most often ask when choosing where to have their baby.",
    "groups": [
      {
        "heading": "Antenatal Visits",
        "faqs": [
          {
            "question": "When should I book my first antenatal visit?",
            "answer": "As soon as a home test is positive, ideally before 8–10 weeks. The first visit confirms and dates the pregnancy with a scan, checks blood group, haemoglobin, thyroid and infections, and starts folic acid if you are not already taking it."
          },
          {
            "question": "How often will I have check-ups?",
            "answer": "Usually once a month until 28 weeks, every two weeks until 36 weeks, then weekly until delivery. Your obstetrician may adjust this schedule if your pregnancy needs closer monitoring. \\[→ High-Risk Pregnancy Care\\]"
          },
          {
            "question": "Which vaccines are given during pregnancy?",
            "answer": "Td (tetanus-diphtheria) is routinely given during pregnancy in India, and your obstetrician may also recommend flu vaccination depending on the season. Live vaccines are avoided until after delivery."
          }
        ]
      },
      {
        "heading": "Delivery",
        "faqs": [
          {
            "question": "What are my chances of a normal delivery?",
            "answer": "Most women with an uncomplicated pregnancy can plan for a vaginal birth. Your chances depend on your baby's position, your health, how labour progresses and any previous caesarean, and your obstetrician discusses these openly before your due date."
          },
          {
            "question": "Is pain relief available during labour?",
            "answer": "Yes. Options for managing labour pain are discussed during your antenatal visits, so you can decide in advance and still change your mind during labour if needed."
          },
          {
            "question": "How long will I stay in hospital after delivery?",
            "answer": "Usually one to two days after a vaginal birth and around three to four days after a caesarean, depending on how you and your baby recover."
          }
        ]
      },
      {
        "heading": "After Birth",
        "faqs": [
          {
            "question": "When can I start breastfeeding?",
            "answer": "Within the first hour after birth if you and your baby are well, including after a caesarean once you are settled. Nurses help with positioning and latching during the first feeds."
          },
          {
            "question": "What postnatal check-ups will I need?",
            "answer": "A follow-up visit around six weeks after delivery checks healing, blood pressure, mood and contraception plans. Earlier review is needed for fever, heavy bleeding, wound pain or persistent low mood."
          },
          {
            "question": "Can my baby continue care at M'Brace?",
            "answer": "Yes. M'Brace paediatricians provide newborn check-ups and growth reviews after discharge, so your baby's care can continue in the same system."
          }
        ]
      },
      {
        "heading": "About M'Brace",
        "faqs": [
          {
            "question": "Is maternity care available in LB Nagar and King Koti?",
            "answer": "Yes. M'Brace offers maternity care in LB Nagar and maternity care in King Koti, with identical services, including LDR rooms and NICU support, at both Kamineni Hospitals units."
          },
          {
            "question": "Can I switch to M'Brace for delivery late in pregnancy?",
            "answer": "Yes. You can register for delivery in the third trimester. Bring all scan reports and blood results so your obstetrician can review them and agree a birth plan before your due date."
          },
          {
            "question": "Is insurance accepted for delivery?",
            "answer": "Kamineni Hospitals' Hyderabad units work with 150+ insurance TPAs for cashless and reimbursement claims. Maternity cover varies by policy, so check waiting periods and limits with your insurer before admission."
          }
        ]
      }
    ]
  },
  "laparoscopic-surgery": {
    "label": "Frequently Asked Questions",
    "heading": "Your Queries",
    "highlight": "Answered by Experts.",
    "description": "What women most often ask before deciding on keyhole surgery.",
    "groups": [
      {
        "heading": "About Laparoscopy",
        "faqs": [
          {
            "question": "What is laparoscopic surgery?",
            "answer": "It is a way of operating through a few small cuts using a thin camera and fine instruments, instead of one large opening. It is used to diagnose and treat conditions of the uterus, ovaries and fallopian tubes."
          },
          {
            "question": "Is laparoscopy better than open surgery?",
            "answer": "For many gynaecological conditions it typically means less pain, smaller scars and a shorter stay. Open surgery may still be preferred for very large fibroids, extensive scarring or some cancers, so your surgeon advises which suits your case."
          },
          {
            "question": "Can laparoscopy help me get pregnant?",
            "answer": "It can, when blocked tubes, endometriosis, fibroids or adhesions are affecting fertility. A diagnostic laparoscopy can also reveal problems that scans miss. Your gynaecologist explains whether an operation is likely to help in your situation."
          }
        ]
      },
      {
        "heading": "Safety & Risks",
        "faqs": [
          {
            "question": "What are the risks?",
            "answer": "Like any operation, laparoscopy carries risks such as bleeding, infection, injury to nearby organs or a reaction to anaesthesia. Occasionally the surgeon must switch to open surgery during the procedure, if that becomes the safer option."
          },
          {
            "question": "Will I have visible scars?",
            "answer": "Each cut is about 0.5–1 cm and usually fades to a small, pale mark over several months. One is often placed in or near the belly button, where it is less noticeable."
          },
          {
            "question": "Is the procedure painful?",
            "answer": "You are asleep throughout the operation. Afterwards, soreness around the cuts and shoulder pain from the gas are common for a few days and are managed with regular painkillers."
          }
        ]
      },
      {
        "heading": "Recovery",
        "faqs": [
          {
            "question": "How long will I stay in hospital?",
            "answer": "Many women go home the same day or after one night, while procedures such as hysterectomy may need one to two nights. Your surgeon confirms the expected stay before the operation."
          },
          {
            "question": "When can I return to work?",
            "answer": "Desk work is often possible within one to two weeks, and physical work within four to six weeks, depending on the procedure and how you recover."
          },
          {
            "question": "When can I try to conceive afterwards?",
            "answer": "That depends on the operation. After cyst or endometriosis surgery it may be soon, while after fibroid removal your surgeon may advise waiting several months for the uterus to heal."
          }
        ]
      },
      {
        "heading": "About M'Brace",
        "faqs": [
          {
            "question": "Is laparoscopic surgery available in LB Nagar and King Koti?",
            "answer": "Yes. M'Brace offers laparoscopic surgery in LB Nagar and laparoscopic surgery in King Koti, with the consultation, pre-surgery tests and the operation itself available at both Kamineni Hospitals units."
          },
          {
            "question": "What does gynaecological laparoscopy in Hyderabad cost?",
            "answer": "The cost depends on the procedure, the length of stay and whether robotic assistance is used. After your consultation, the billing team provides an estimate, and Kamineni Hospitals' Hyderabad units work with 150+ insurance TPAs."
          }
        ]
      }
    ]
  },
  "menopause-care": {
    "label": "Frequently Asked Questions",
    "heading": "Your Queries",
    "highlight": "Answered by Experts.",
    "description": "What women most often ask as their periods begin to change.",
    "groups": [
      {
        "heading": "Understanding Menopause",
        "faqs": [
          {
            "question": "What is the difference between perimenopause and menopause?",
            "answer": "Perimenopause is the transition, often starting in the 40s, when hormone levels fluctuate and periods become irregular. Menopause is confirmed once you have had no periods for 12 months in a row."
          },
          {
            "question": "At what age does menopause usually start?",
            "answer": "Most women reach menopause between 45 and 55. Menopause before 45 is considered early, and before 40 it is called premature ovarian insufficiency. Both need medical review."
          },
          {
            "question": "Can I still get pregnant during perimenopause?",
            "answer": "Yes. Ovulation can still happen while periods are irregular, so contraception is advised until 12 months after your last period if you are over 50, or 24 months if you are under 50."
          }
        ]
      },
      {
        "heading": "Treatment",
        "faqs": [
          {
            "question": "Is hormone therapy safe?",
            "answer": "For most healthy women under 60, or within ten years of menopause, the benefits usually outweigh the risks. It may not suit women with a history of breast cancer, blood clots or certain heart conditions, so your gynaecologist assesses your individual risk first."
          },
          {
            "question": "How long can I take hormone therapy?",
            "answer": "There is no fixed time limit. Your gynaecologist reviews the need each year, considering how your symptoms respond and any change in your health."
          },
          {
            "question": "Do I need treatment if my symptoms are mild?",
            "answer": "Not necessarily. Lifestyle changes may be enough for mild symptoms. A consultation still helps to check bone, heart and screening needs, which matter even without troublesome symptoms."
          }
        ]
      },
      {
        "heading": "Long-Term Health",
        "faqs": [
          {
            "question": "Why is bleeding after menopause a concern?",
            "answer": "Bleeding a year or more after your last period is not normal and should be checked promptly. Most causes are benign, such as thinning of the vaginal lining, but an ultrasound and sometimes a biopsy are needed to rule out problems with the womb lining."
          },
          {
            "question": "How does menopause affect my heart and bones?",
            "answer": "Falling oestrogen speeds up bone loss and raises cholesterol, increasing the risk of osteoporosis and heart disease over time. Regular checks and early action can reduce both risks."
          }
        ]
      },
      {
        "heading": "About M'Brace",
        "faqs": [
          {
            "question": "Is menopause care available in LB Nagar and King Koti?",
            "answer": "Yes. M'Brace offers menopause care in LB Nagar and menopause care in King Koti, with consultations, blood tests and pelvic ultrasound at both Kamineni Hospitals units."
          },
          {
            "question": "What should I bring to my first visit?",
            "answer": "Note when your periods changed, your main symptoms and how long they have lasted. Bring a list of current medicines and any recent blood test or screening reports."
          },
          {
            "question": "Can I have screening at the same visit?",
            "answer": "Yes. A Pap smear, breast examination and blood tests can often be arranged alongside your consultation, or through a preventive women's health package."
          }
        ]
      }
    ]
  },
  "preventive-women-s-health-packages": {
    "label": "Frequently Asked Questions",
    "heading": "Your Queries",
    "highlight": "Answered by Experts.",
    "description": "What women most often ask before booking a health check-up.",
    "groups": [
      {
        "heading": "About the Packages",
        "faqs": [
          {
            "question": "How often should a woman have a health check-up?",
            "answer": "Once a year is a good routine from your 30s, while some tests, such as cervical screening, follow their own intervals. Your gynaecologist sets a schedule based on your age, results and family history."
          },
          {
            "question": "Which package is right for me?",
            "answer": "That depends on your age, symptoms and family history rather than price alone. A short review before booking helps choose a package that covers what you need without unnecessary tests."
          }
        ]
      },
      {
        "heading": "Tests & Preparation",
        "faqs": [
          {
            "question": "Do I need to fast before the tests?",
            "answer": "Yes, usually for 10–12 hours overnight for sugar and cholesterol tests. Water is allowed, and regular medicines should be taken unless your doctor advises otherwise."
          },
          {
            "question": "Can I have a Pap smear during my period?",
            "answer": "It is best scheduled between periods, around the middle of your cycle, as blood can affect the sample."
          },
          {
            "question": "Is a Pap smear painful?",
            "answer": "Most women feel only brief pressure or mild discomfort. The test takes a few minutes, and you can return to normal activities straight away."
          }
        ]
      },
      {
        "heading": "Results",
        "faqs": [
          {
            "question": "What if a result is abnormal?",
            "answer": "An abnormal result does not always mean disease. Your gynaecologist explains what it may indicate and arranges follow-up, such as repeat testing, colposcopy or imaging, so the cause is confirmed before any treatment."
          },
          {
            "question": "How soon will I get my results?",
            "answer": "Most blood results are ready within a day or two, while Pap smear and HPV results can take longer. You are told when to return for your review."
          }
        ]
      },
      {
        "heading": "About M'Brace",
        "faqs": [
          {
            "question": "Are preventive women's health packages available in LB Nagar and King Koti?",
            "answer": "Yes. M'Brace offers preventive women's health packages in LB Nagar and preventive women's health packages in King Koti, with tests and the results review available at both Kamineni Hospitals units."
          },
          {
            "question": "How much does a package cost?",
            "answer": "The cost of women's health packages in Hyderabad at M'Brace depends on the tests included. The care team shares current package options and prices when you call or book."
          },
          {
            "question": "Does insurance cover health check-ups?",
            "answer": "Some policies include an annual preventive check-up. Check your policy terms, and confirm with the billing team before your visit."
          }
        ]
      }
    ]
  },
  "preconception-counselling": {
    "label": "Frequently Asked Questions",
    "heading": "Your Queries",
    "highlight": "Answered by Experts.",
    "description": "What couples most often ask before trying for a baby.",
    "groups": [
      {
        "heading": "Planning",
        "faqs": [
          {
            "question": "When should I come for preconception counselling?",
            "answer": "Ideally three to six months before you start trying. This leaves time for folic acid to take effect, vaccines to be completed and any condition to be brought under control."
          },
          {
            "question": "Should my partner attend too?",
            "answer": "Yes, where possible. His health, habits, medicines and carrier status affect fertility and the baby's health, and joint testing avoids repeat visits later."
          }
        ]
      },
      {
        "heading": "Tests & Supplements",
        "faqs": [
          {
            "question": "How much folic acid should I take?",
            "answer": "Most women need 400 micrograms daily, starting three months before conception. A higher dose, usually 5 mg, may be prescribed for diabetes, epilepsy, a high body weight or a previous baby with a neural tube defect."
          },
          {
            "question": "Which vaccines should I have before pregnancy?",
            "answer": "Rubella (MMR), chickenpox and hepatitis B are checked and given if you are not immune. Live vaccines need a gap of at least one month before you try to conceive."
          },
          {
            "question": "Why is thalassaemia testing important?",
            "answer": "If both partners are carriers, each pregnancy has a one-in-four chance of a child with thalassaemia major. Knowing this before conception allows informed planning and early testing in pregnancy."
          }
        ]
      },
      {
        "heading": "Special Situations",
        "faqs": [
          {
            "question": "How long should we wait after a miscarriage?",
            "answer": "There is no fixed rule. Many couples can try again once they feel ready, but your gynaecologist may advise waiting if tests or treatment are needed first."
          },
          {
            "question": "Can I get pregnant while taking medicines for a long-term condition?",
            "answer": "Often yes, but some medicines are unsafe in early pregnancy. Do not stop any medicine on your own; your gynaecologist will advise which to continue, change or stop before you try."
          }
        ]
      },
      {
        "heading": "About M'Brace",
        "faqs": [
          {
            "question": "Is preconception counselling available in LB Nagar and King Koti?",
            "answer": "Yes. M'Brace offers preconception counselling in LB Nagar and preconception counselling in King Koti, with tests and follow-up available at both Kamineni Hospitals units."
          },
          {
            "question": "What happens if we need fertility help later?",
            "answer": "You can move straight into fertility evaluation with the same team, using the results already gathered, rather than starting again at another centre."
          }
        ]
      }
    ]
  },
  "women-s-wellness-support": {
    "label": "Frequently Asked Questions",
    "heading": "Your Queries",
    "highlight": "Answered by Experts.",
    "description": "What women most often ask about everyday health concerns.",
    "groups": [
      {
        "heading": "Energy & Weight",
        "faqs": [
          {
            "question": "Why am I always tired?",
            "answer": "Common medical causes include anaemia, low vitamin D or B12, thyroid problems and poor sleep. Blood tests can identify most of these, and treating the cause often improves energy within weeks."
          },
          {
            "question": "Can PCOS cause weight gain?",
            "answer": "Yes. PCOS often involves insulin resistance, which makes weight gain easier and weight loss harder. Treating insulin resistance alongside diet and activity changes can help."
          }
        ]
      },
      {
        "heading": "Periods & Hormones",
        "faqs": [
          {
            "question": "Are irregular periods something to worry about?",
            "answer": "Occasional variation is normal, but cycles shorter than 21 days, longer than 35 days or with very heavy bleeding should be checked, as PCOS, thyroid problems or other conditions may be responsible."
          },
          {
            "question": "Is severe PMS normal?",
            "answer": "Mild changes before a period are common, but symptoms that disrupt work or relationships may be PMDD, which is treatable with lifestyle changes, medicines or both."
          }
        ]
      },
      {
        "heading": "Emotional & Intimate Health",
        "faqs": [
          {
            "question": "Can a gynaecologist help with low mood?",
            "answer": "Yes, when mood changes are linked to periods, hormones, pregnancy or thyroid problems. For persistent depression or anxiety, your gynaecologist can refer you to the psychiatry team within Kamineni Hospitals."
          },
          {
            "question": "Is vaginal discharge normal?",
            "answer": "Clear or white discharge that changes through the cycle is normal. A change in colour, smell or amount, or itching and pain, may signal an infection that needs testing."
          },
          {
            "question": "Which contraception is best for me?",
            "answer": "There is no single best method. Your gynaecologist considers your age, health, blood pressure, smoking and plans for future pregnancy before recommending options."
          }
        ]
      },
      {
        "heading": "About M'Brace",
        "faqs": [
          {
            "question": "Is women's wellness support available in LB Nagar and King Koti?",
            "answer": "Yes. M'Brace offers women's wellness support in LB Nagar and women's wellness support in King Koti, with consultations and tests at both Kamineni Hospitals units."
          },
          {
            "question": "Can teenagers be seen without an internal examination?",
            "answer": "Yes. Most teen concerns are assessed through history, a general examination and blood tests or an abdominal ultrasound, and a parent can be present."
          },
          {
            "question": "Is my consultation confidential?",
            "answer": "Yes. Concerns about intimate health, contraception or mood are discussed privately, and your information is shared only with clinicians involved in your care."
          }
        ]
      }
    ]
  },
  "paediatrics-neonatology": {
    "label": "Frequently Asked Questions",
    "heading": "Your Queries",
    "highlight": "Answered by Experts.",
    "description": "What parents most often ask about their child's routine and everyday health.",
    "groups": [
      {
        "heading": "Newborns",
        "faqs": [
          {
            "question": "When should my baby have the first check-up after going home?",
            "answer": "Usually within the first week, often around day three to five, to check feeding, weight and jaundice. Come sooner if your baby is feeding poorly, very sleepy or looks increasingly yellow."
          },
          {
            "question": "Is newborn jaundice serious?",
            "answer": "Mild jaundice is common in the first week and usually settles on its own. Jaundice in the first 24 hours, rising levels or a very sleepy baby need prompt testing, as phototherapy may be required."
          }
        ]
      },
      {
        "heading": "Check-ups & Vaccines",
        "faqs": [
          {
            "question": "How often should my child see a paediatrician?",
            "answer": "Frequently in the first year, alongside vaccination visits, then about once a year from age two for growth and development checks, plus visits whenever your child is unwell."
          },
          {
            "question": "Are vaccines safe?",
            "answer": "Yes. Vaccines are tested and monitored for safety. Mild fever or soreness for a day or two is common, and your paediatrician explains what to expect and when to call."
          }
        ]
      },
      {
        "heading": "When Your Child Is Unwell",
        "faqs": [
          {
            "question": "When should I worry about a fever?",
            "answer": "Seek prompt care for any fever in a baby under three months, a fever lasting more than three days, or fever with breathing difficulty, a rash that does not fade, drowsiness or poor drinking."
          },
          {
            "question": "Do children always need antibiotics?",
            "answer": "No. Most coughs, colds and tummy infections are viral and clear without antibiotics. Your paediatrician prescribes them only when a bacterial infection is likely or confirmed."
          }
        ]
      },
      {
        "heading": "About M'Brace",
        "faqs": [
          {
            "question": "Is paediatrics and neonatology care available in LB Nagar and King Koti?",
            "answer": "Yes. M'Brace offers paediatrics and neonatology in LB Nagar and paediatrics and neonatology in King Koti, with consultations, vaccinations and newborn care at both Kamineni Hospitals units."
          },
          {
            "question": "Can my baby continue care here after being born at M'Brace?",
            "answer": "Yes. Babies born at M'Brace can move straight into newborn and paediatric follow-up with the same team, which already knows their birth history."
          },
          {
            "question": "What makes a good newborn care hospital in Hyderabad?",
            "answer": "Consultant neonatologists, a NICU with ventilation support, 24/7 emergency cover and a team that coordinates with your obstetrician. M'Brace brings these together within Kamineni Hospitals."
          }
        ]
      }
    ]
  },
  "developmental-paediatrics": {
    "label": "Frequently Asked Questions",
    "heading": "Your Queries",
    "highlight": "Answered by Experts.",
    "description": "What parents most often ask when they notice a delay.",
    "groups": [
      {
        "heading": "Milestones",
        "faqs": [
          {
            "question": "When should my child start talking?",
            "answer": "Most children say their first words around 12 months and two-word phrases by two years. No words by 16 months or no phrases by two years is a reason for assessment."
          },
          {
            "question": "My child walked late. Is that a problem?",
            "answer": "Many children walk between 9 and 18 months. Not walking by 18 months, or losing skills already learned, should be checked."
          }
        ]
      },
      {
        "heading": "Assessment",
        "faqs": [
          {
            "question": "What happens during a developmental assessment?",
            "answer": "Your child plays, talks and moves while the paediatrician observes and uses standard checklists, and you answer questions about daily skills. It takes longer than a routine visit, and no preparation is needed."
          },
          {
            "question": "Can autism be diagnosed early?",
            "answer": "Signs can often be noticed from 18 months, and screening can begin then. A firm diagnosis follows detailed evaluation, but support can start as soon as concerns are identified."
          }
        ]
      },
      {
        "heading": "Therapy & Support",
        "faqs": [
          {
            "question": "Will my child grow out of a delay?",
            "answer": "Some mild delays catch up naturally, but others do not. Early assessment avoids losing time, as therapies started young are usually more effective."
          },
          {
            "question": "Does my child need medicines?",
            "answer": "Most developmental concerns are supported with therapy and home strategies. Medicines are considered only for specific conditions, such as ADHD in older children, after careful assessment."
          }
        ]
      },
      {
        "heading": "About M'Brace",
        "faqs": [
          {
            "question": "Is developmental paediatrics available in LB Nagar and King Koti?",
            "answer": "Yes. M'Brace offers developmental paediatrics in LB Nagar and developmental paediatrics in King Koti, with assessments and follow-up at both Kamineni Hospitals units."
          },
          {
            "question": "What should I bring to the assessment?",
            "answer": "Bring your child's vaccination card, birth and NICU records if applicable, school reports and short videos of the behaviour that concerns you."
          }
        ]
      }
    ]
  },
  "nicu-neonatal-intensive-care": {
    "label": "Frequently Asked Questions",
    "heading": "Your Queries",
    "highlight": "Answered by Experts.",
    "description": "What parents most often ask when their baby needs NICU care.",
    "groups": [
      {
        "heading": "About the NICU",
        "faqs": [
          {
            "question": "Why has my baby been admitted to the NICU?",
            "answer": "Common reasons include premature birth, breathing difficulty, low birth weight, jaundice, low blood sugar or suspected infection. Your neonatologist explains your baby's specific reason and what the care plan involves."
          },
          {
            "question": "How long will my baby stay?",
            "answer": "That depends on why your baby was admitted and how early they were born. Some babies need a few days of observation, while very premature babies may stay until around their original due date."
          }
        ]
      },
      {
        "heading": "Your Baby's Care",
        "faqs": [
          {
            "question": "Is the equipment painful for my baby?",
            "answer": "Monitors and most tubes are not painful. For procedures such as blood tests, the team uses comfort measures like swaddling and skin-to-skin contact where possible."
          },
          {
            "question": "Can my baby have breast milk in the NICU?",
            "answer": "Yes, and it is encouraged. Expressed breast milk can be given by tube even before your baby can feed directly, and it helps protect against infection."
          }
        ]
      },
      {
        "heading": "Being a NICU Parent",
        "faqs": [
          {
            "question": "Can I visit and hold my baby?",
            "answer": "Parents are encouraged to spend time with their baby. Holding and skin-to-skin contact begin once your baby is stable enough, and the nurses guide you."
          },
          {
            "question": "How will I get updates?",
            "answer": "The neonatologist explains your baby's progress during rounds and whenever there is a significant change, and you can ask questions at any time."
          }
        ]
      },
      {
        "heading": "About M'Brace",
        "faqs": [
          {
            "question": "Is NICU care available in LB Nagar and King Koti?",
            "answer": "Yes. M'Brace has a NICU in LB Nagar and a NICU in King Koti, with neonatologists and high-end neonatal ventilation at both Kamineni Hospitals units."
          },
          {
            "question": "Can babies born elsewhere be admitted?",
            "answer": "Yes. Babies born at other hospitals can be transferred to M'Brace with 24/7 transport support through Kamineni Hospitals, coordinated between the referring hospital and the NICU team."
          }
        ]
      }
    ]
  },
  "picu-paediatric-intensive-care": {
    "label": "Frequently Asked Questions",
    "heading": "Your Queries",
    "highlight": "Answered by Experts.",
    "description": "What parents most often ask when their child is in intensive care.",
    "groups": [
      {
        "heading": "About the PICU",
        "faqs": [
          {
            "question": "What is the difference between the PICU and the NICU?",
            "answer": "The NICU cares for newborns, mostly in the first weeks of life. The PICU cares for older babies and children who become critically ill or need close monitoring after surgery or injury."
          },
          {
            "question": "How long will my child stay in the PICU?",
            "answer": "Many children need only a few days, while others with severe illness may need longer. The team reviews progress daily and moves your child to the ward as soon as it is safe."
          }
        ]
      },
      {
        "heading": "Your Child's Treatment",
        "faqs": [
          {
            "question": "Why does my child need a ventilator?",
            "answer": "A ventilator takes over breathing while the lungs or brain recover, reducing strain on the body. It is temporary and is removed gradually as your child improves."
          },
          {
            "question": "Will my child be in pain?",
            "answer": "The team uses regular pain relief and sedation to keep your child comfortable, and checks comfort levels frequently, especially during procedures."
          }
        ]
      },
      {
        "heading": "Being With Your Child",
        "faqs": [
          {
            "question": "Can I stay with my child?",
            "answer": "Parents are encouraged to be with their child as much as possible. Talking to and touching your child helps, even when sedated, and nurses explain what you can do."
          },
          {
            "question": "How will I be kept informed?",
            "answer": "The intensivist explains your child's condition, treatment and plans, and updates you whenever something changes. You can ask questions at any time."
          }
        ]
      },
      {
        "heading": "About M'Brace",
        "faqs": [
          {
            "question": "Is PICU care available in LB Nagar and King Koti?",
            "answer": "Yes. M'Brace has a PICU in LB Nagar and a PICU in King Koti, with paediatric critical care support at both Kamineni Hospitals units."
          },
          {
            "question": "Can a child be transferred from another hospital?",
            "answer": "Yes. Children can be transferred to the M'Brace PICU with 24/7 transport support through Kamineni Hospitals, coordinated between the referring doctor and the PICU team."
          }
        ]
      }
    ]
  },
  "paediatric-emergency": {
    "label": "Frequently Asked Questions",
    "heading": "Your Queries",
    "highlight": "Answered by Experts.",
    "description": "What parents most often ask in an emergency.",
    "groups": [
      {
        "heading": "When to Come",
        "faqs": [
          {
            "question": "When should I bring my child to an emergency instead of a clinic?",
            "answer": "Come to emergency for breathing difficulty, a seizure, a baby under three months with fever, signs of dehydration, a serious injury, or if your child is unusually drowsy. Milder illnesses can usually wait for a clinic appointment."
          },
          {
            "question": "What should I do if my child swallows something harmful?",
            "answer": "Do not make your child vomit. Bring the packet or container and come straight to emergency, especially for button batteries, medicines or chemicals."
          },
          {
            "question": "What should I do during a seizure?",
            "answer": "Lay your child on their side on a safe surface, do not put anything in their mouth, and note the time. Call the emergency line if it lasts more than five minutes or your child does not wake normally."
          }
        ]
      },
      {
        "heading": "In the Emergency",
        "faqs": [
          {
            "question": "Why is another child being seen before mine?",
            "answer": "Children are treated in order of urgency, not arrival. A child with breathing difficulty may be seen before one who arrived earlier with a minor injury."
          },
          {
            "question": "Can I stay with my child?",
            "answer": "Yes. A parent can stay with their child during assessment and treatment in most situations."
          }
        ]
      },
      {
        "heading": "After Leaving",
        "faqs": [
          {
            "question": "When should I return after discharge?",
            "answer": "Return immediately if breathing worsens, your child becomes drowsy, stops drinking, passes very little urine, or the fever returns after settling."
          }
        ]
      },
      {
        "heading": "About M'Brace",
        "faqs": [
          {
            "question": "Is paediatric emergency available in LB Nagar and King Koti?",
            "answer": "Yes. M'Brace offers paediatric emergency in LB Nagar and paediatric emergency in King Koti, with a paediatric emergency area open 24/7 at both Kamineni Hospitals units."
          },
          {
            "question": "Do I need an appointment for emergency care?",
            "answer": "No. Emergency care needs no appointment or referral. Come directly, or call ahead if you can so the team is prepared."
          }
        ]
      }
    ]
  },
  "fertility-evaluation": {
    "label": "Frequently Asked Questions",
    "heading": "Your Queries",
    "highlight": "Answered by Experts.",
    "description": "What couples most often ask before fertility testing.",
    "groups": [
      {
        "heading": "When to Test",
        "faqs": [
          {
            "question": "When should we get a fertility evaluation?",
            "answer": "After 12 months of regular unprotected intercourse if the woman is under 35, or after six months if she is 35 or older. Come earlier with irregular periods, known pelvic problems or male health concerns."
          },
          {
            "question": "Does my partner need to be tested too?",
            "answer": "Yes. Male factors contribute to many cases of infertility, and a semen analysis is simple and quick. Testing both partners together avoids delays and unnecessary treatment."
          }
        ]
      },
      {
        "heading": "The Tests",
        "faqs": [
          {
            "question": "Are fertility tests painful?",
            "answer": "Most are blood tests and ultrasound scans. A tubal test such as an HSG can cause cramping for a few minutes, and pain relief taken beforehand helps."
          },
          {
            "question": "When in my cycle should the tests be done?",
            "answer": "Hormone tests are usually done on day two or three of your period, tubal tests after bleeding stops and before ovulation, and AMH on any day. Your specialist gives you a schedule."
          }
        ]
      },
      {
        "heading": "Results",
        "faqs": [
          {
            "question": "How long does the evaluation take?",
            "answer": "Most tests can be completed within about one menstrual cycle, so a clear picture is often available within four to six weeks."
          },
          {
            "question": "What if all our results are normal?",
            "answer": "This is called unexplained infertility. Treatment options such as ovulation induction with IUI, or IVF, are still available and are discussed based on your age and how long you have been trying."
          }
        ]
      },
      {
        "heading": "About M'Brace",
        "faqs": [
          {
            "question": "Is fertility evaluation available in LB Nagar and King Koti?",
            "answer": "Yes. M'Brace offers fertility evaluation in LB Nagar and fertility evaluation in King Koti, with tests for both partners at both Kamineni Hospitals units."
          },
          {
            "question": "Is our information kept private?",
            "answer": "Yes. Fertility consultations and results are discussed privately with you and your partner, and shared only with the clinicians involved in your care."
          }
        ]
      }
    ]
  },
  "male-fertility-care": {
    "label": "Frequently Asked Questions",
    "heading": "Your Queries",
    "highlight": "Answered by Experts.",
    "description": "What men most often ask about fertility testing and treatment.",
    "groups": [
      {
        "heading": "Testing",
        "faqs": [
          {
            "question": "How should I prepare for a semen analysis?",
            "answer": "Avoid ejaculation for two to five days beforehand, avoid alcohol and hot baths for a few days, and tell the team about any fever or new medicines in the past three months."
          },
          {
            "question": "Is one abnormal report enough to diagnose infertility?",
            "answer": "No. Sperm quality naturally varies, so an abnormal result is repeated after a few weeks. A diagnosis is made only after repeated tests and a full assessment."
          }
        ]
      },
      {
        "heading": "Causes",
        "faqs": [
          {
            "question": "Can lifestyle really affect sperm?",
            "answer": "Yes. Smoking, heavy drinking, obesity, heat exposure and some medicines and supplements, such as anabolic steroids, can reduce sperm quality, and many effects improve after changes are made."
          },
          {
            "question": "Does a low sperm count mean we cannot conceive naturally?",
            "answer": "Not necessarily. Many men with a mildly low count father children naturally. The chance depends on the severity, your partner's fertility and how long you have been trying."
          }
        ]
      },
      {
        "heading": "Treatment",
        "faqs": [
          {
            "question": "Can male infertility be treated?",
            "answer": "Often, yes. Hormonal problems, infections and varicocele can be treated, and where sperm quality stays low, IUI, IVF or ICSI can help couples conceive."
          },
          {
            "question": "What if there are no sperm in the semen?",
            "answer": "Further tests show whether sperm are not being made or are blocked. In many men, sperm can be retrieved surgically and used for ICSI."
          }
        ]
      },
      {
        "heading": "About M'Brace",
        "faqs": [
          {
            "question": "Is male fertility care available in LB Nagar and King Koti?",
            "answer": "Yes. M'Brace offers male fertility care in LB Nagar and male fertility care in King Koti, with semen analysis and consultations at both Kamineni Hospitals units."
          },
          {
            "question": "Will my results be kept confidential?",
            "answer": "Yes. Results are discussed privately with you, and with your partner only if you wish."
          }
        ]
      }
    ]
  },
  "ovulation-tracking": {
    "label": "Frequently Asked Questions",
    "heading": "Your Queries",
    "highlight": "Answered by Experts.",
    "description": "What women most often ask about tracking ovulation.",
    "groups": [
      {
        "heading": "The Basics",
        "faqs": [
          {
            "question": "How many scans will I need in a cycle?",
            "answer": "Usually three to five, starting with a baseline scan on day two or three, then every two to three days from around day nine until ovulation."
          },
          {
            "question": "Are ovulation apps and kits reliable?",
            "answer": "Apps estimate based on past cycles and can be wrong, especially with irregular periods. LH kits detect the surge but cannot confirm an egg was released; scans give a clearer picture."
          }
        ]
      },
      {
        "heading": "Scans",
        "faqs": [
          {
            "question": "Is a follicular scan painful?",
            "answer": "No. It is a short internal ultrasound that most women find only mildly uncomfortable, and no fasting is needed."
          },
          {
            "question": "What size should the follicle be?",
            "answer": "A follicle usually releases an egg at about 18-24 mm, though your specialist also considers the lining and hormone levels."
          }
        ]
      },
      {
        "heading": "Medicines",
        "faqs": [
          {
            "question": "Are ovulation medicines safe?",
            "answer": "Yes, when monitored. Scans reduce the main risks, such as too many follicles leading to twins or ovarian overstimulation, by allowing doses to be adjusted."
          },
          {
            "question": "How many cycles should we try before changing treatment?",
            "answer": "Typically three to six monitored cycles, depending on age and other test results. Your specialist reviews progress after each cycle."
          }
        ]
      },
      {
        "heading": "About M'Brace",
        "faqs": [
          {
            "question": "Is ovulation tracking available in LB Nagar and King Koti?",
            "answer": "Yes. M'Brace offers ovulation tracking in LB Nagar and ovulation tracking in King Koti, with scans and hormone tests at both Kamineni Hospitals units."
          },
          {
            "question": "Can scans fit around work?",
            "answer": "Most scans take only a few minutes. Scan days are planned with you in advance where possible, so you can arrange your schedule."
          }
        ]
      }
    ]
  },
  "ivf-in-vitro-fertilisation": {
    "label": "Frequently Asked Questions",
    "heading": "Your Queries",
    "highlight": "Answered by Experts.",
    "description": "What couples most often ask before starting IVF.",
    "groups": [
      {
        "heading": "Is IVF Right for Us?",
        "faqs": [
          {
            "question": "Do we need IVF, or are there simpler options?",
            "answer": "That depends on your diagnosis. Many couples first try ovulation support or IUI. IVF is recommended when the tubes are blocked, sperm quality is low, or simpler treatments are unlikely to work."
          },
          {
            "question": "How long does one IVF cycle take?",
            "answer": "About four to six weeks from the start of stimulation to the pregnancy test, including roughly two weeks of injections and two weeks after transfer."
          }
        ]
      },
      {
        "heading": "The Process",
        "faqs": [
          {
            "question": "Are IVF injections painful?",
            "answer": "They are small injections under the skin, usually given at home after training. Most women find them manageable, with mild bruising or bloating."
          },
          {
            "question": "Is egg collection painful?",
            "answer": "It is done under sedation, so you should not feel pain during the procedure. Mild cramps afterwards usually settle within a day or two."
          }
        ]
      },
      {
        "heading": "Risks & Expectations",
        "faqs": [
          {
            "question": "What is the success rate of IVF?",
            "answer": "It varies widely with the woman's age, egg reserve, embryo quality and the cause of infertility. Your specialist explains your individual chances after evaluation, rather than quoting a general figure."
          },
          {
            "question": "What are the risks of IVF?",
            "answer": "Possible risks include ovarian hyperstimulation syndrome, multiple pregnancy and, rarely, complications from egg collection. Careful monitoring and single embryo transfer reduce these risks."
          }
        ]
      },
      {
        "heading": "About M'Brace",
        "faqs": [
          {
            "question": "Is IVF treatment available in LB Nagar and King Koti?",
            "answer": "Yes. M'Brace offers IVF treatment in LB Nagar and IVF treatment in King Koti, with consultations, scans and treatment at both Kamineni Hospitals units."
          },
          {
            "question": "How do I choose the best IVF hospital near me?",
            "answer": "Look for evaluation before treatment, experienced infertility specialists and embryologists, a transparent discussion of your chances and costs, and pregnancy care after a positive test. M'Brace offers all of these at LB Nagar and King Koti."
          }
        ]
      }
    ]
  },
  "iui-intrauterine-insemination": {
    "label": "Frequently Asked Questions",
    "heading": "Your Queries",
    "highlight": "Answered by Experts.",
    "description": "What couples most often ask about IUI.",
    "groups": [
      {
        "heading": "About IUI",
        "faqs": [
          {
            "question": "How is IUI different from IVF?",
            "answer": "In IUI, sperm is placed in the uterus and fertilisation happens naturally inside the body. In IVF, eggs are collected and fertilised in the lab. IUI is simpler and less costly but suits fewer situations."
          },
          {
            "question": "Who should not have IUI?",
            "answer": "IUI is unsuitable if both tubes are blocked, sperm quality is severely low or egg reserve is very reduced. IVF or ICSI is usually advised instead."
          }
        ]
      },
      {
        "heading": "The Procedure",
        "faqs": [
          {
            "question": "Is IUI painful?",
            "answer": "Most women feel only mild cramping, similar to a Pap smear. No anaesthesia is needed, and it takes a few minutes."
          },
          {
            "question": "Do I need bed rest after IUI?",
            "answer": "No. A short rest at the hospital is enough, and normal daily activities can continue."
          }
        ]
      },
      {
        "heading": "Results & Next Steps",
        "faqs": [
          {
            "question": "How many IUI cycles should we try?",
            "answer": "Usually three to four cycles, depending on age and diagnosis. If pregnancy does not occur, your specialist discusses moving to IVF."
          },
          {
            "question": "What are the chances of success with IUI?",
            "answer": "They depend on age, the cause of infertility and sperm quality. Your specialist explains your individual chances rather than a general figure."
          }
        ]
      },
      {
        "heading": "About M'Brace",
        "faqs": [
          {
            "question": "Is IUI treatment available in LB Nagar and King Koti?",
            "answer": "Yes. M'Brace offers IUI treatment in LB Nagar and IUI treatment in King Koti, with monitoring, sperm preparation and insemination at both Kamineni Hospitals units."
          },
          {
            "question": "How do I choose the best IUI hospital in Hyderabad?",
            "answer": "Check that the tubes and sperm are assessed before IUI, cycles are scan-monitored, sperm is prepared by an embryologist, and IVF is available if needed. M'Brace offers each of these."
          }
        ]
      }
    ]
  },
  "icsi-intracytoplasmic-sperm-injection": {
    "label": "Frequently Asked Questions",
    "heading": "Your Queries",
    "highlight": "Answered by Experts.",
    "description": "What couples most often ask about ICSI.",
    "groups": [
      {
        "heading": "About ICSI",
        "faqs": [
          {
            "question": "What is the difference between IVF and ICSI?",
            "answer": "In conventional IVF, eggs and sperm are placed together and fertilise on their own. In ICSI, the embryologist injects one sperm into each egg. ICSI is a lab step within an IVF cycle."
          },
          {
            "question": "Does ICSI need more injections or procedures for the woman?",
            "answer": "No. Stimulation, egg collection and embryo transfer are the same as IVF. Only the fertilisation method in the lab changes."
          }
        ]
      },
      {
        "heading": "The Process",
        "faqs": [
          {
            "question": "Can ICSI work if there are no sperm in the semen?",
            "answer": "Often, if sperm can be retrieved surgically from the testis or epididymis. Tests first show whether sperm is being produced."
          },
          {
            "question": "Will all injected eggs fertilise?",
            "answer": "Not always. Some eggs do not fertilise or develop normally even after ICSI. You are told the results the day after the procedure."
          }
        ]
      },
      {
        "heading": "Safety & Results",
        "faqs": [
          {
            "question": "Is ICSI safe for the baby?",
            "answer": "ICSI is widely used, and most children born after ICSI are healthy. A small increase in some risks has been reported, mainly linked to the underlying male infertility, which your specialist will discuss."
          },
          {
            "question": "Does ICSI improve success rates?",
            "answer": "ICSI helps when sperm cannot fertilise eggs on their own. It does not improve results when sperm quality is normal, so it is used only when it adds value."
          }
        ]
      },
      {
        "heading": "About M'Brace",
        "faqs": [
          {
            "question": "Is ICSI treatment available in LB Nagar and King Koti?",
            "answer": "Yes. M'Brace offers ICSI treatment in LB Nagar and ICSI treatment in King Koti, with consultations and cycle monitoring at both Kamineni Hospitals units."
          },
          {
            "question": "How much does ICSI cost?",
            "answer": "The cost depends on medicines, the number of embryos frozen and whether sperm retrieval is needed. The team provides an estimate after your consultation."
          }
        ]
      }
    ]
  },
  "egg-freezing": {
    "label": "Frequently Asked Questions",
    "heading": "Your Queries",
    "highlight": "Answered by Experts.",
    "description": "What women most often ask about freezing their eggs.",
    "groups": [
      {
        "heading": "Is It Right for Me?",
        "faqs": [
          {
            "question": "What is the best age to freeze eggs?",
            "answer": "Ideally before 35, when egg quality is higher and more eggs are usually collected. Freezing later is still possible, but more eggs may be needed for a reasonable chance."
          },
          {
            "question": "Does egg freezing guarantee a future pregnancy?",
            "answer": "No. Not every frozen egg survives thawing, fertilises or develops into an embryo. Egg freezing improves the chance of using your own younger eggs later, but it cannot guarantee a pregnancy."
          }
        ]
      },
      {
        "heading": "The Process",
        "faqs": [
          {
            "question": "How many eggs should I freeze?",
            "answer": "That depends on your age and reserve. Younger women generally need fewer eggs for a reasonable chance, and your specialist gives you a personalised target."
          },
          {
            "question": "Is egg freezing painful?",
            "answer": "The injections cause mild discomfort, and egg collection is done under sedation. Some cramping or bloating for a day or two afterwards is common."
          }
        ]
      },
      {
        "heading": "Using Frozen Eggs",
        "faqs": [
          {
            "question": "How long can eggs stay frozen?",
            "answer": "Vitrified eggs remain stable while frozen. In India, the maximum storage period is set by the ART regulations and depends on your consent, and the team explains the current rules before freezing."
          },
          {
            "question": "What happens when I want to use my eggs?",
            "answer": "The eggs are thawed, fertilised with sperm by ICSI and grown into embryos. A selected embryo is then transferred to the uterus."
          }
        ]
      },
      {
        "heading": "About M'Brace",
        "faqs": [
          {
            "question": "Is egg freezing available in LB Nagar and King Koti?",
            "answer": "Yes. M'Brace offers egg freezing in LB Nagar and egg freezing in King Koti, with consultations, monitoring and egg collection at both Kamineni Hospitals units."
          },
          {
            "question": "Can I freeze my eggs before cancer treatment?",
            "answer": "Yes, if time allows. Urgent fertility preservation can often be arranged quickly, in coordination with your oncology team, ideally before treatment starts."
          }
        ]
      }
    ]
  },
  "gynaecology": {
    "label": "Frequently Asked Questions",
    "heading": "Your Queries",
    "highlight": "Answered by Experts.",
    "description": "What women most often ask before seeing a gynaecologist.",
    "groups": [
      {
        "heading": "Your First Visit",
        "faqs": [
          {
            "question": "Do I need a referral to see a gynaecologist?",
            "answer": "No. You can book directly at LB Nagar or King Koti. Bring any earlier scan reports and blood tests, and a note of your cycle dates and symptoms."
          },
          {
            "question": "Can I see a gynaecologist during my period?",
            "answer": "Yes, for most concerns. If a Pap smear or swab is planned, a mid-cycle appointment is better, but heavy bleeding or pain should be checked at any time."
          },
          {
            "question": "When should a young woman first see a gynaecologist?",
            "answer": "Whenever period problems, severe pain or other concerns arise. Many girls first visit in their teens, and an internal examination is usually not needed at that age."
          }
        ]
      },
      {
        "heading": "Common Conditions",
        "faqs": [
          {
            "question": "Are fibroids dangerous?",
            "answer": "Most fibroids are non-cancerous and cause no symptoms. Treatment is needed only if they cause heavy bleeding, pain, pressure or fertility problems, and the approach depends on their size and position."
          },
          {
            "question": "Can PCOS be cured?",
            "answer": "PCOS cannot be cured, but its symptoms can be controlled. Regular cycles, ovulation and skin symptoms often improve with lifestyle changes and medicines, and fertility treatment is available if needed."
          },
          {
            "question": "Is period pain normal?",
            "answer": "Mild cramps are common. Pain that stops daily activities, worsens over time or comes with heavy bleeding may point to endometriosis, fibroids or infection, and should be checked."
          }
        ]
      },
      {
        "heading": "Treatment",
        "faqs": [
          {
            "question": "Will I need surgery?",
            "answer": "Not necessarily. Many conditions respond to medicines. Surgery is advised only when symptoms persist, a growth is large or a diagnosis needs confirmation, and keyhole methods are preferred where suitable."
          },
          {
            "question": "Can treatment affect my fertility?",
            "answer": "Your gynaecologist considers your pregnancy plans before choosing treatment. Fertility-sparing options, such as removing fibroids or cysts while keeping the uterus and ovaries, are preferred whenever possible."
          }
        ]
      },
      {
        "heading": "About M'Brace",
        "faqs": [
          {
            "question": "Is gynaecology available in LB Nagar and King Koti?",
            "answer": "Yes. M'Brace offers gynaecology in LB Nagar and gynaecology in King Koti, with consultations, ultrasound, lab tests and procedures at both Kamineni Hospitals units."
          },
          {
            "question": "How do I choose the best gynaecologist in Hyderabad?",
            "answer": "Look for consultant-level qualifications, surgical experience if a procedure may be needed, on-site ultrasound and laboratory facilities, and a clear explanation of your options. M'Brace's gynaecologists hold DGO, DNB, MD or MS qualifications, with laparoscopic and fertility expertise in the same team."
          },
          {
            "question": "What should I look for in the best obstetrics & gynecology hospital in Hyderabad?",
            "answer": "Pregnancy care and gynaecology under one roof, with ultrasound, laboratory, theatres and a NICU on site. M'Brace combines these within NABH- and NABL-accredited Kamineni Hospitals, so care continues from gynaecology to pregnancy and delivery."
          }
        ]
      }
    ]
  }
};
