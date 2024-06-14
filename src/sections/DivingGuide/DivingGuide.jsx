import "./DivingGuide.css";
import { Title } from "../../components";
import divemaster from "../../assets/icons/uomo.png";
import checklist from "../../assets/icons/dive-checklist-9689874-7908455.png";

const DivingGuide = () => {
  return (
    <>
      <Title>Diving Guide</Title>
      <div className="diving-guide" id="guide">
        <img src={divemaster} alt="" />
        <img src={checklist} alt="" />
        <p>
          Insegnare l'immersione subacquea con docenti esperti richiede un
          approccio completo e attento. Innanzitutto, i docenti presentano le
          basi teoriche attraverso lezioni informative sulle leggi fisiche
          dell'acqua, l'uso dell'attrezzatura e le procedure di sicurezza.
          Queste lezioni solitamente includono materiale didattico, come manuali
          o presentazioni multimediali, per facilitare la comprensione.
          Successivamente, gli istruttori conducono esercitazioni pratiche in
          piscina o in ambienti controllati per aiutare gli studenti a
          familiarizzare con l'attrezzatura e ad acquisire le abilità di base
          come il controllo della fluttuabilità e la respirazione sottomarina.
          Una parte fondamentale dell'insegnamento dell'immersione è la pratica
          in acque aperte, dove gli istruttori guidano gli studenti in
          immersioni reali in mare o in laghi. Durante queste esperienze, gli
          istruttori supervisionano da vicino gli studenti, monitorando la loro
          sicurezza e guidandoli nell'esplorazione dei meravigliosi paesaggi
          sottomarini. In tutto il processo, i docenti enfatizzano la sicurezza
          in primo luogo, insegnando agli studenti come prevenire e gestire
          situazioni di emergenza. Gli istruttori condividono la loro passione
          per il mondo subacqueo e promuovono la conservazione dell'ambiente
          marino, ispirando gli studenti a diventare subacquei responsabili e
          appassionati.
        </p>
      </div>
    </>
  );
};

export default DivingGuide;
