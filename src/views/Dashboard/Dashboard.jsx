import React from "react";
import PropTypes from "prop-types";

// react component for creating dynamic tables
import ReactTable from "react-table";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import MonetizationOn from "@material-ui/icons/MonetizationOn";
import Assignment from "@material-ui/icons/Assignment";
import DashboardIcon from "@material-ui/icons/Dashboard";
import Dvr from "@material-ui/icons/Dvr";
import Favorite from "@material-ui/icons/Favorite";
import Close from "@material-ui/icons/Close";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CardBody from "components/Card/CardBody.jsx";

import dashboardStyle from "assets/jss/material-dashboard-pro-react/views/dashboardStyle";
import { dataTable } from "variables/general.jsx";
import { cardTitle } from "assets/jss/material-dashboard-pro-react.jsx";

const styles = {
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px"
  }
};

class Dashboard extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };
  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={6} md={6} lg={3}>
            <Card>
              <CardHeader color="success" stats icon>
                <CardIcon color="success">
                  <Icon>work</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>ODT Generadas</p>
                <h3 className={classes.cardTitle}>
                  30 / 20
                </h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                <DateRange />
                  Esta semana
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6} lg={3}>
            <Card>
              <CardHeader color="success" stats icon>
                <CardIcon color="success">
                  <Assignment />
                </CardIcon>
                <p className={classes.cardCategory}>Guías</p>
                <h3 className={classes.cardTitle}>20</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <DateRange />
                  Esta semana
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6} lg={3}>
            <Card>
              <CardHeader color="danger" stats icon>
                <CardIcon color="danger">
                  <Icon>info_outline</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Incidencias</p>
                <h3 className={classes.cardTitle}>1</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <LocalOffer />
                  En seguimiento
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6} lg={3}>
            <Card>
              <CardHeader color="warning" stats icon>
                <CardIcon color="warning">
                  <MonetizationOn />
                </CardIcon>
                <p className={classes.cardCategory}>Por pagar</p>
                <h3 className={classes.cardTitle}>$34,245</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <DateRange />
                  Este mes
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
        <GridItem xs={12}>
          <Card>
            <CardHeader color="primary" icon>
            </CardHeader>
            <CardBody>
              <ReactTable
                data={this.state.data}
                filterable
                columns={[
                  {
                    Header: "# ODT",
                    accessor: "name"
                  },
                  {
                    Header: "Proyecto",
                    accessor: "position"
                  },
                  {
                    Header: "Contenido",
                    accessor: "age"
                  },
                  {
                    Header: "Currier",
                    accessor: "actions",
                    sortable: false,
                    filterable: false
                  },
                  {
                    Header: "Tipo Srv",
                    accessor: "age"
                  },
                  {
                    Header: "# Guía",
                    accessor: "age"
                  },
                  {
                    Header: "Destino",
                    accessor: "age"
                  },
                  {
                    Header: "F Envío",
                    accessor: "age"
                  },
                  {
                    Header: "F Estimada",
                    accessor: "age"
                  },
                  {
                    Header: "F Llegada",
                    accessor: "age"
                  }
                ]}
                defaultPageSize={10}
                showPaginationTop
                showPaginationBottom={false}
                className="-striped -highlight"
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>        
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
