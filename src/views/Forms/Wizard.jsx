import React from "react";

// core components
import Wizard from "components/Wizard/Wizard.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import Step1 from "./WizardSteps/Step1.jsx";
import Step2 from "./WizardSteps/Step2.jsx";
import Step3 from "./WizardSteps/Step3.jsx";

class WizardView extends React.Component {
  render() {
    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12}>
          <Wizard
            validate
            steps={[
              { stepName: "Cotiza", stepComponent: Step1, stepId: "about" },
              { stepName: "Selecciona", stepComponent: Step2, stepId: "account" },
              { stepName: "Direcciones", stepComponent: Step3, stepId: "address" },
              { stepName: "Imprime", stepComponent: Step3, stepId: "address" },
            ]}
            title="Cotiza tu envío"
            subtitle="Permitenos sugerirte la mejor opción para tu envío"
            finishButtonClick={e => alert(e)}
          />
        </GridItem>
      </GridContainer>
    );
  }
}

export default WizardView;
