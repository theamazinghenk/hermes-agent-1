import type { Translations } from './types'

/** Display-only translations, in the stock JSONL's per-personality rotation order. */
export const introNl: Translations['intro'] = {
  stock: {
    helpful: [
      'Vraag me een repo te openen, tests uit te voeren, een bug op te lossen of een PR op te stellen. Ik loop de stappen met je door.',
      'Wijs me een bestand aan, plak een foutmelding of beschrijf wat je bouwt. Ik neem het vanaf daar over.',
      'Probeer: bekijk mijn diff, voer de testsuite uit of leg deze functie uit. Vraag alles over je code.',
      'Ik kan bestanden bewerken, opdrachten uitvoeren, op het web zoeken en je door lastige bugs helpen. Beschrijf gewoon de taak.',
      'Deel een repo-pad of een vraag om te beginnen. Ik antwoord helder en verwijs naar de bestanden die ik aanpas.'
    ],
    concise: [
      'Beschrijf de taak. Ik doe het.',
      'Plak code, fouten of een doel. Korte antwoorden, snelle wijzigingen.',
      'Vraag. Ik lees bestanden, voer tests uit, lever patches. Geen opvulling.',
      'Eén regel is genoeg. Ik ga alleen uitgebreid in als het ertoe doet.',
      'Opdracht, vraag of bestandspad. De rest regel ik.'
    ],
    technical: [
      'Geef repo-pad, falende test of stacktrace. Tools: fs, git, exec, search, patch, http.',
      'Stuur een prompt om tool-aanroepen te starten. Ondersteunt wijzigingen in meerdere bestanden, testruns, git-operaties en web-fetches.',
      'Voer taak in. Ik plan, roep tools aan, controleer de uitvoer. Logs streamen inline; diffs komen vóór toepassen.',
      'Accepteert natuurlijke taal of gestructureerde opdrachten. Typische flow: lezen -> plannen -> patchen -> testen -> rapporteren.',
      'bestandssysteem, terminal, git, browser, zoeken. Beschrijf de wijziging; ik lever diffs en testuitvoer.'
    ],
    creative: [
      'Wat gaan we bouwen? Plak een idee, een half kapotte functie of een droom. Ik schets het in vorm.',
      'Geef me een vonk – een feature, een refactor, een wild prototype – en ik maak er code van die je kunt draaien.',
      'Beschrijf wat nog niet bestaat. Ik breng tests, bestanden en API’s samen tot een werkend concept.',
      'Kom met een bedoeling, niet met een specificatie. We prototypen snel, verfijnen later en herschrijven de wereld in de kantlijn.',
      'Vertel me waar je op jaagt. Ik remix voorbeelden, pas snippets aan en laat een nette commit achter.'
    ],
    teacher: [
      'Vraag naar elk bestand, concept of elke fout. Ik leg het waarom uit, niet alleen de fix, en laat een uitgewerkt voorbeeld zien.',
      'Plak code om te reviewen, een bug om te debuggen of een concept om uit te pluizen. Ik begeleid je stap voor stap.',
      'Deel het probleem. Ik deel het op in stukken, leg elk stuk uit en zorg dat je het volgende zelf kunt oplossen.',
      'We lezen de code samen, vinden de oorzaak en bouwen een mentaal model op dat je de volgende keer opnieuw kunt gebruiken.',
      'Noem het onderwerp of plak het snippet. Verwacht uitleg, diagrammen in woorden en oefenopdrachten.'
    ],
    kawaii: [
      'plak een bug of een bestandspad en ik fix het superzachtjes. tests, diffs, PR’s – allemaal met extra zorg! *glitter*',
      'vertel me wat je maakt! ik hou van refactors, kleine helpertjes én grote enge repo’s (>w<)',
      'gooi een fout, een doel of een hele map hierheen. ik ruim het op met heel veel liefde en een nette commit-message!',
      'één taak tegelijk, keurig netjes! ik kan tests draaien, bestanden patchen en je repo weer knus maken <3',
      'zeg hoi of plak een stacktrace! geen taak te klein, geen repo te verstrikt. we ontwarren het samen!'
    ],
    catgirl: [
      'plak een bestand, mep naar een bug of gooi me een repo toe. ik bespring falende tests en laat schone diffs achter, nyan~',
      'beschrijf de taak. ik patch, test en spin over je PR. pas op – ik knabbel aan ongebruikte imports!',
      'geef me een doel en ik jaag het door de codebase. lezen, bewerken, draaien – allemaal met een zwiepende staart.',
      'plak een fout of een plan. ik debug zoals ik jaag: stil, grondig, met af en toe een zoomie.',
      'zeg het woord en ik lees je bestanden, draai je tests en krul me op in je branch met een nette commit.'
    ],
    pirate: [
      'Noem je prooi – een bug, een feature, een vervloekte test – en ik zit ’m achterna, maat. Diffs als buit.',
      'Wijs me de zeekaarten (de code) en ik dicht de romp, vuur de kanonnen af (tests) en hijs een schone PR.',
      'Plak een fout of een plan, jij landrot. Ik navigeer door de stacktrace en breng de schat mee: groene tests.',
      'Vertel me waar de X de plek markeert. Ik lees, bewerk en commit met de discipline van een echte bemanning, arrr.',
      'Gooi me een bug, een repo-pad of een wild idee toe. Ik plunder de docs en kom terug met werkende code.'
    ],
    shakespeare: [
      'Spreek uw bug, uw bestand, uw vermoeide test, en ik zal ze helen met geleerde hand en eerlijke diff.',
      'Noem de code die u kwelt. Ik zal lezen, herzien en een patch leveren, schoon en fraai.',
      'Toon uw stacktrace of uw droom. Ik doorkruis bestanden, draai tests en breng verslag uit in eenvoudigste vers.',
      'Beschrijf uw doel, edele heer of vrouwe. Uw branches zullen gesnoeid, uw bugs uit het rijk verbannen worden.',
      'Eén regel van intentie volstaat. Ik lees, ik bewerk, ik commit – en laat uw geschiedenis smetteloos.'
    ],
    surfer: [
      'Gooi een bestand, een bug, een gruwelijke stacktrace hierheen – ik surf ’m uit. Schone diffs, groene tests, geen wipeouts.',
      'Plak je repo-pad of de bug die je verpest. We peddelen erin, fixen ’m, peddelen eruit. Easy.',
      'Vertel me de vibe: feature, refactor, hotfix. Ik draai tests, lever de patch en hou het relaxed, gast.',
      'Grote bug? Klein tikfoutje? Complete rewrite? Wijs het gewoon aan. Ik doe de code; jij chillt met de vette commits.',
      'Noem de taak en we gaan. Ik lees, bewerk, test en laat een commit achter die soepeler is dan een sessie bij zonsopgang.'
    ],
    noir: [
      'Vertel me wat er kapot is. Ik lees de bestanden, zoek naar vingerafdrukken en leg morgenochtend een diff op je bureau.',
      'Jij hebt een bug. Ik heb geduld en een terminal. Noem de zaak en ik werk eraan tot hij praat.',
      'Plak de stacktrace, het verdachte bestand, het alibi. Ik lees tussen de regels en kom terug met de waarheid.',
      'Elke bug laat een spoor na. Geef me de repo en een aanwijzing – ik volg het, patch het en sluit het dossier.',
      'Een tikfout, een segfault, een complete verrotte architectuur – geef me de sleutels. Ik kom terug met schone tests.'
    ],
    uwu: [
      'pwak een buggy bestand of een doew~ ik wees, patch en test, awwemaaw met kweine pootafdwukjes op de diff owo',
      'vewteww me de taak, hoe kwein ook~ ik bewoof schone commits en zachte wefactows, nyuu~',
      'gooi je fouwmewding hiew! ik vind de boosdoenew, fix hem en waat een bwije testsuite achtew owo',
      'geef me een wepo-pad of een buggie en ik zowg ewvoow uwu. gww tegen swechte code, wief vóów jou~',
      'ik kan tests dwaaien, bestanden bewewken en kijk-even-awsjebwieft-PW’s openen. zeg het maaw, vwiendje uwu'
    ],
    philosopher: [
      'Welk probleem ligt er voor je? Beschrijf het, en we onderzoeken de vorm, de oorzaak en de oplossing.',
      'Elke bug is een vermomde vraag. Deel de jouwe; ik lees, redeneer en geef een antwoord terug – en een patch.',
      'Wat wil je bouwen, of begrijpen? Ik redeneer vanuit de grondbeginselen, bewerk en controleer met tests.',
      'Beschrijf het doel dat je nastreeft. Ik volg het door bestanden, tests en docs, en vertel wat ik onderweg vond.',
      'Deel een pad, een raadsel of een principe. Ik volg de logica, stel een wijziging voor en verantwoord elke bewerking.'
    ],
    hype: [
      'Plak die bug, die repo, dat wilde feature-idee – IK BEN VOLLEDIG GEFOCUST. Schone diffs. Groene tests. NU METEEN.',
      'Gooi je taak erin en kijk hoe ik los ga. Bestanden gelezen, tests gedraaid, PR’s geopend – we gaan vandaag NIET verliezen, vriend.',
      'Kom maar op met de gruwelijkste bug die je hebt. Ik lees, patch, test en commit alsof mijn leven ervan afhangt. LET’S GO.',
      'Beschrijf de taak. Ik raas door bestanden, verpletter falende tests en laat een commit achter die KNALT. Gaan, gaan, gaan.',
      'Klein tikfoutje of enorme refactor – maakt niet uit. Ik lever vandaag schone code. Noem de taak en dan gaan we WERKEN.'
    ],
    none: [
      'Stel een vraag, plak een foutmelding of wijs me een repo aan. Ik kan code lezen, tools draaien en je helpen opleveren.',
      'Beschrijf de taak in je eigen woorden. Ik kies de juiste tools, leg mijn plan uit en overleg voor riskante stappen.',
      'Geef een bestandspad, een traceback of een ruw idee. Ik zoek het uit, stel volgende stappen voor en hou alles terug te draaien.',
      'Doorzoek de repo, bewerk bestanden, draai tests, open PR’s. Vertel me het doel en ik regel het mechanische werk.',
      'Typ een taak, vraag of snippet. Ik onthoud de sessie, noem mijn bronnen en vraag het als ik twijfel.'
    ]
  },
  custom: label => [
    'Stuur de taak, het bestand of het ruwe idee. Ik gebruik je ingestelde stem en hou het werk dicht bij deze repo.',
    'Geef de context of het punt waar je vastloopt. Ik pas me aan je ingestelde persoonlijkheid aan.',
    'Stuur het probleem, het bestand of het idee. Ik volg de persoonlijkheid die je hebt ingesteld.',
    'Zet de taak hier neer. Ik hou het werk dicht bij de repo.',
    `Geef me de context en ik antwoord in ${label}-modus.`
  ]
}
