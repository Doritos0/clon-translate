import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { Container, Row, Col, Button } from 'react-bootstrap'
import { useStore } from './hooks/useStore'
import { AUTO_LANGUAGE } from './constants'
import { Cambio } from './components/icons'

function App() {

  const { fromLanguage, toLanguage, intercambiarIdiomas } = useStore()

  return (
    <>
    <Container fluid>
      <h1>App</h1>
      <Row>
        <Col>
        <h2>From</h2>
        { fromLanguage }
        </Col>
        <Col>
        <Button variant='link' disabled={fromLanguage == AUTO_LANGUAGE} onClick={intercambiarIdiomas}>
        <Cambio />
        </Button>
        </Col>
        <Col>
        <h2>To</h2>
        {toLanguage}
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default App
