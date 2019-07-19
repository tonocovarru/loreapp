
import React from "react";
import PropTypes from "prop-types";

// @material-ui/icons
import RecordVoiceOver from "@material-ui/icons/RecordVoiceOver";
import Checkbox from "@material-ui/core/Checkbox";


// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Assignment from "@material-ui/icons/Assignment";


// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

import customSelectStyle from "assets/jss/material-dashboard-pro-react/customSelectStyle.jsx";
import customCheckboxRadioSwitch from "assets/jss/material-dashboard-pro-react/customCheckboxRadioSwitch.jsx";
import MaterialTable from 'material-table';


const style = {
  infoText: {
    fontWeight: "300",
    margin: "10px 0 30px",
    textAlign: "center"
  },
  inputAdornmentIcon: {
    color: "#555"
  },
  inputAdornment: {
    position: "relative"
  },
  choiche: {
    textAlign: "center",
    cursor: "pointer",
    marginTop: "20px"
  },
  ...customSelectStyle,
  ...customCheckboxRadioSwitch
};

class Step1 extends React.Component {
  constructor(props) {
    super(props); 

    this.state = {
      columns: [
        { title: 'Peso (Kgs)', field: 'peso' , type: 'numeric'},
        { title: 'Largo (Cms)', field: 'largo', type: 'numeric' },
        { title: 'Ancho (Cms)', field: 'ancho', type: 'numeric' },
        { title: 'Alto (Cms)', field: 'alto', type: 'numeric' },
      ],
      data: [
          
        { peso: 1, largo: 0, ancho: 0, alto: 0 },
      ], 
      nationalDelivery: true,
      internationalDelivery: false,
      documents: false,
      packages: true,
      envelopesNumber: "",
      packages:[{
        weight: "",
        long: "",
        width: "",
        height: "",
        weightCurrier: "",
        content: "",
        declaredValue: 0.0
      }],
      services:[{
        typeService: "",
        homeCollection: false,
        homeDelivery: true,
        securePackage: true,
        packing: false
      }],
      origin: {
        country: "México",
        postalCode: "",
        street: "",
        extNumber: "",
        intNumber: "",
        suburb: "",
        city: "",
        cityCouncil: "",
        references: ""
      },
      destination: {
        country: "México",
        postalCode: "",
        street: "",
        extNumber: "",
        intNumber: "",
        suburb: "",
        city: "",
        cityCouncil: "",
        references: ""
      },
      collectDate : "",
      collectHour: "",
      firstname: "",
      firstnameState: "",
      lastname: "",
      lastnameState: "",
      email: "",
      emailState: ""
    };
  }


  handleSimple = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  sendState() {
    return this.state;
  }
  // function that returns true if value is email, false otherwise
  verifyEmail(value) {
    var emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRex.test(value)) {
      return true;
    }
    return false;
  }
  // function that verifies if a string has a given length or not
  verifyLength(value, length) {
    if (value.length >= length) {
      return true;
    }
    return false;
  }
  change(event, stateName, type, stateNameEqualTo) {
    switch (type) {
      case "email":
        if (this.verifyEmail(event.target.value)) {
          this.setState({ [stateName + "State"]: "success" });
        } else {
          this.setState({ [stateName + "State"]: "error" });
        }
        break;
      case "length":
        if (this.verifyLength(event.target.value, stateNameEqualTo)) {
          this.setState({ [stateName + "State"]: "success" });
        } else {
          this.setState({ [stateName + "State"]: "error" });
        }
        break;
      default:
        break;
    }
    this.setState({ [stateName]: event.target.value });
  }
  isValidated() {
    if (
      this.state.firstnameState === "success" &&
      this.state.lastnameState === "success" &&
      this.state.emailState === "success"
    ) {
      return true;
    } else {
      if (this.state.firstnameState !== "success") {
        this.setState({ firstnameState: "error" });
      }
      if (this.state.lastnameState !== "success") {
        this.setState({ lastnameState: "error" });
      }
      if (this.state.emailState !== "success") {
        this.setState({ emailState: "error" });
      }
    }
    return false;
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };


  render() {
    const { classes } = this.props;
    return (
      <GridContainer justify="center">              
              <GridItem xs={12} sm={4}>
                <div className={classes.choiche}>
                  <Checkbox
                    tabIndex={-1}
                    onClick={this.handleChange("desgin")}
                    checkedIcon={
                      <i
                        className={
                          "fas fa-pencil-alt " + classes.iconCheckboxIcon
                        }
                      />
                    }
                    icon={
                      <i
                        className={
                          "fas fa-pencil-alt " + classes.iconCheckboxIcon
                        }
                      />
                    }
                    classes={{
                      checked: classes.iconCheckboxChecked,
                      root: classes.iconCheckbox
                    }}
                  />
                  <h6>Sobres</h6>
                </div>
              </GridItem>
              <GridItem xs={12} sm={4}>
                <div className={classes.choiche}>
                  <Checkbox
                    tabIndex={-1}
                    onClick={this.handleChange("code")}
                    checkedIcon={
                      <i
                        className={
                          "fas fa-terminal " + classes.iconCheckboxIcon
                        }
                      />
                    }
                    icon={
                      <i
                        className={
                          "fas fa-terminal " + classes.iconCheckboxIcon
                        }
                      />
                    }
                    classes={{
                      checked: classes.iconCheckboxChecked,
                      root: classes.iconCheckbox
                    }}
                  />
                  <h6>Paquetes</h6>
                </div>
              </GridItem>
              <GridItem xs={12} sm={12}>
              </GridItem>
        <GridItem xs={12} sm={4}>
        <FormControl fullWidth className={classes.selectFormControl}>
                  <InputLabel
                    htmlFor="simple-select"
                    className={classes.selectLabel}
                  >
                    País
                  </InputLabel>
                  <Select
                    MenuProps={{
                      className: classes.selectMenu
                    }}
                    classes={{
                      select: classes.select
                    }}
                    value={this.state.simpleSelect}
                    onChange={this.handleSimple}
                    inputProps={{
                      name: "simpleSelect",
                      id: "simple-select"
                    }}
                  >
                    <MenuItem
                      disabled
                      classes={{
                        root: classes.selectMenuItem
                      }}
                    >
                      País
                    </MenuItem>
                    <MenuItem
                      classes={{
                        root: classes.selectMenuItem,
                        selected: classes.selectMenuItemSelected
                      }}
                      value="2"
                    >
                      México
                    </MenuItem>
                    <MenuItem
                      classes={{
                        root: classes.selectMenuItem,
                        selected: classes.selectMenuItemSelected
                      }}
                      value="3"
                    >
                      Estados Unidos
                    </MenuItem>
                  </Select>
                </FormControl>
    </GridItem>
<GridItem xs={12} sm={4}>
          <CustomInput
            success={this.state.lastnameState === "success"}
            error={this.state.lastnameState === "error"}
            labelText={
              <span>
                Dirección, ciudad, código postal <small>(required)</small>
              </span>
            }
            id="lastname"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: event => this.change(event, "lastname", "length", 3),
              endAdornment: (
                <InputAdornment
                  position="end"
                  className={classes.inputAdornment}
                >
                  <RecordVoiceOver className={classes.inputAdornmentIcon} />
                </InputAdornment>
              )
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12}>
              </GridItem>        
        <GridItem xs={12} sm={4}>
        <FormControl fullWidth className={classes.selectFormControl}>
                  <InputLabel
                    htmlFor="simple-select"
                    className={classes.selectLabel}
                  >
                    País
                  </InputLabel>
                  <Select
                    MenuProps={{
                      className: classes.selectMenu
                    }}
                    classes={{
                      select: classes.select
                    }}
                    value={this.state.simpleSelect}
                    onChange={this.handleSimple}
                    inputProps={{
                      name: "simpleSelect",
                      id: "simple-select"
                    }}
                  >
                    <MenuItem
                      disabled
                      classes={{
                        root: classes.selectMenuItem
                      }}
                    >
                      País
                    </MenuItem>
                    <MenuItem
                      classes={{
                        root: classes.selectMenuItem,
                        selected: classes.selectMenuItemSelected
                      }}
                      value="2"
                    >
                      México
                    </MenuItem>
                    <MenuItem
                      classes={{
                        root: classes.selectMenuItem,
                        selected: classes.selectMenuItemSelected
                      }}
                      value="3"
                    >
                      Estados Unidos
                    </MenuItem>
                  </Select>
                </FormControl>
</GridItem>
<GridItem xs={12} sm={4}>
          <CustomInput
            success={this.state.lastnameState === "success"}
            error={this.state.lastnameState === "error"}
            labelText={
              <span>
                Dirección, ciudad, código postal <small>(required)</small>
              </span>
            }
            id="lastname"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: event => this.change(event, "lastname", "length", 3),
              endAdornment: (
                <InputAdornment
                  position="end"
                  className={classes.inputAdornment}
                >
                  <RecordVoiceOver className={classes.inputAdornmentIcon} />
                </InputAdornment>
              )
            }}
          />
        </GridItem>
        <GridItem xs={12}>
        </GridItem>    
        <GridItem xs={12} >
        <MaterialTable
      title="Detalle de Paquetes"
      columns={this.state.columns}
      data={this.state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...this.state.data];
              data.push(newData);
              this.setState({ ...this.state, data });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...this.state.data];
              data[data.indexOf(oldData)] = newData;
              this.setState({ ...this.state, data });
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...this.state.data];
              data.splice(data.indexOf(oldData), 1);
              this.setState({ ...this.state, data });
            }, 600);
          }),
      }}
    />
        </GridItem>
      </GridContainer>
    );
  }
}

Step1.propTypes = {
  classes: PropTypes.object
};

export default withStyles(style)(Step1);
