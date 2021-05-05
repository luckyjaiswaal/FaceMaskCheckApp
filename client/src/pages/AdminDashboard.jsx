import React from "react";
import "../style/style.css";
import cardImg from "../components/cardImg.png";
import { withRouter } from "react-router-dom";
import api from "../api";
import { Link } from "react-router-dom";
import { Component } from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col } from "reactstrap";

class AdminDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: localStorage.getItem("user_id"),
      venueData: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    const { user_id } = this.state;
    api.getVenues({ user_id }).then((res) => {
      this.setState({ venueData: res.data.venue_list });
      //  window.alert(res.data.venue_list[0].venue_name)
    });
  }

  setVenue(id) {
    localStorage.setItem("venue_id", id);
    this.props.history.push("/venueDashboard");
  }

  setAnalytics(id) {
    localStorage.setItem("venue_id", id);
    console.log("TESSSSSSSt");
    console.log(id);
    this.props.history.push("/Analytics");
  }
  renderVenues() {
    return this.state.venueData.map((venue, index) => {
      const { venue_name, venue_id, authority_name, venue_capacity } = venue;
      return (
        <Card className="test" key={venue_id} style={{ width: "18rem" }}>
          <Card.Img variant="top" src={cardImg} />
          <Card.Body>
            <Card.Title>{venue_name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Capacity {venue_capacity}
            </Card.Subtitle>
            <Card.Text>{authority_name}</Card.Text>
            <Button variant="primary" onClick={() => this.setVenue(venue_id)}>
              Enter
            </Button>
            <Button
              variant="primary"
              onClick={() => this.setAnalytics(venue_id)}
            >
              Analytics
            </Button>
          </Card.Body>
        </Card>
      );
    });
  }

  render() {
    return (
      <div className="AdminDashboard" style={{}}>
        <div
          className="container"
          style={{
            alignContent: "center",
            padding: 40,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              color: "black",
              margin: "80",
              fontSize: 30,
              textAlign: "center",
            }}
          >
            Admin Dashboard
          </h1>
          {/* search bar */}
          <div
            className="searchbar"
            style={{
              padding: 20,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <input
              type="text"
              placeholder="Looking for something?"
              style={{ width: 560, textAlign: "center", borderRadius: 50 }}
            ></input>
            {/* search Icon */}
            <FontAwesomeIcon icon={faSearchPlus} style={{ marginLeft: 5 }} />
            <FontAwesomeIcon icon={faPlus} style={{ marginLeft: 5 }} />
          </div>
          {/* <div className="test">
            <button
              className=""
              style={{
                backgroundColor: "#008080",
                width: "200px",
                height: "40px",
                color: "white",
                border: "none",
              }}
            >
              Add Venue
            </button>
          </div> */}
          <div>
            <h1 style={{ textAlign: "center", fontSize: 20 }}>Venue List</h1>
            <div className="venue">{this.renderVenues()}</div>
          </div>
        </div>
        {/* Cards */}
        <div className="cards" style={{padding: 20}}>
          <div className="card-group" style={{ margin: "auto" }}>
            <Card style={{ padding: 50, margin: 10 }}>
              <Card.Body>
                <Card.Title>Bendingo</Card.Title>
                <Card.Text>
                  Random Text Random Text Random Text Random Text Random Text
                  Random Text Random Text
                </Card.Text>
              </Card.Body>
              <Card.Footer style={{}}>
                <Row>
                  <Col>
                    <Link to="#">
                      <p>More</p>
                    </Link>
                  </Col>
                  <Col>
                    <Link to="#">
                      <p> Open Venue</p>
                    </Link>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
            <Card style={{ padding: 50, margin: 10 }}>
              <Card.Body>
                <Card.Title>Woolloomooloo</Card.Title>
                <Card.Text>
                  Woolloomooloo is known for Finger Wharf, an old cargo dock
                  that attracts a trendy clientele with fine dining, hip bars
                  and water views on all sides.
                </Card.Text>
              </Card.Body>
              <Card.Footer style={{}}>
                <Row>
                  <Col>
                    <Link to="#">
                      <p>More</p>
                    </Link>
                  </Col>
                  <Col>
                    <Link to="#">
                      <p> Open Venue</p>
                    </Link>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
            <Card style={{ padding: 50, margin: 10 }}>
              <Card.Body>
                <Card.Title>Banana</Card.Title>
                <Card.Text>
                  Banana is a small town and rural locality in the Shire of
                  Banana, Central Queensland, Australia
                </Card.Text>
              </Card.Body>
              <Card.Footer style={{}}>
                <Row>
                  <Col>
                    <Link to="#">
                      <p>More</p>
                    </Link>
                  </Col>
                  <Col>
                    <Link to="#">
                      <p> Open Venue</p>
                    </Link>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
          </div>
          <div className="card-group" style={{ margin: "auto" }}>
            <Card style={{ padding: 50, margin: 10 }}>
              <Card.Body>
                <Card.Title>Useless Loop</Card.Title>
                <Card.Text>
                  Useless Loop is a town located on the Heirisson Prong on
                  Denham Sound in the Southern Region of UNESCO World Heritage
                  Site Shark Bay, Western Australia.
                </Card.Text>
              </Card.Body>
              <Card.Footer style={{}}>
                <Row>
                  <Col>
                    <Link to="#">
                      <p>More</p>
                    </Link>
                  </Col>
                  <Col>
                    <Link to="#">
                      <p> Open Venue</p>
                    </Link>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
            <Card style={{ padding: 50, margin: 10 }}>
              <Card.Body>
                <Card.Title>MANANGATANG</Card.Title>
                <Card.Text>
                  Manangatang is a remote town in north-west Victoria,
                  Australia. At the 2016 census, Manangatang had a population of
                  309. It is sometimes noted for its unusual name, from an
                  Aboriginal term - "manang" meaning land and "kaaiti" meaning
                  water.
                </Card.Text>
              </Card.Body>
              <Card.Footer style={{}}>
                <Row>
                  <Col>
                    <Link to="#">
                      <p>More</p>
                    </Link>
                  </Col>
                  <Col>
                    <Link to="#">
                      <p> Open Venue</p>
                    </Link>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
            <Card style={{ padding: 50, margin: 10 }}>
              <Card.Body>
                <Card.Title>Broke</Card.Title>
                <Card.Text>
                  Broke is a village of approximately 292 people in the Hunter
                  Region of New South Wales, Australia in Singleton Shire. It is
                  located 157 kilometres to the north of Sydney on the original
                  early colonial road from Sydney to Singleton.
                </Card.Text>
              </Card.Body>
              <Card.Footer style={{}}>
                <Row>
                  <Col>
                    <Link to="#">
                      <p>More</p>
                    </Link>
                  </Col>
                  <Col>
                    <Link to="#">
                      <p> Open Venue</p>
                    </Link>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(AdminDashboard);
