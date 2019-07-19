data: dataTable.dataRows.map((prop, key) => {
            return {
                tracking: prop[0],
                workorder: prop[1],
                project: prop[2],
                currier: prop[3],
                typeservice: prop[4],
                content: prop[5],
                destine: prop[6],
                senddate: prop[7],
                deliverydate: prop[8],
                actions: (
                    // we've added some custom button actions
                    <div className="actions-right">
                    {/* use this button to add a like kind of action */}
                    <Button
                        justIcon
                        round
                        simple
                        onClick={() => {
                        let obj = this.state.data.find(o => o.id === key);
                        alert(
                            "You've clicked LIKE button on \n{ \nName: " +
                            obj.name +
                            ", \nposition: " +
                            obj.position +
                            ", \noffice: " +
                            obj.office +
                            ", \nage: " +
                            obj.age +
                            "\n}."
                        );
                        }}
                        color="info"
                        className="like"
                    >
                        <Favorite />
                    </Button>{" "}
                    {/* use this button to add a edit kind of action */}
                    <Button
                        justIcon
                        round
                        simple
                        onClick={() => {
                        let obj = this.state.data.find(o => o.id === key);
                        alert(
                            "You've clicked EDIT button on \n{ \nName: " +
                            obj.name +
                            ", \nposition: " +
                            obj.position +
                            ", \noffice: " +
                            obj.office +
                            ", \nage: " +
                            obj.age +
                            "\n}."
                        );
                        }}
                        color="warning"
                        className="edit"
                    >
                        <Dvr />
                    </Button>{" "}
                    {/* use this button to remove the data row */}
                    <Button
                        justIcon
                        round
                        simple
                        onClick={() => {
                        var data = this.state.data;
                        data.find((o, i) => {
                            if (o.id === key) {
                            // here you should add some custom code so you can delete the data
                            // from this component and from your server as well
                            data.splice(i, 1);
                            return true;
                            }
                            return false;
                        });
                        this.setState({ data: data });
                        }}
                        color="danger"
                        className="remove"
                    >
                        <Close />
                    </Button>{" "}
                    </div>
                )
            };    
        });
