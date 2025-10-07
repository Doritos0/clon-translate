import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { Container, Row, Col, Button, Stack } from 'react-bootstrap'
import { useStore } from './hooks/useStore'
import { AUTO_LANGUAGE } from './constants'
import { Cambio } from './components/icons'
import { LanguageSelector } from './components/LanguageSelector'
import TextArea from './components/TextArea'
import { SectionType } from './types'

function App() {

  const { loading, fromLanguage, toLanguage, intercambiarIdiomas, setFromLanguage, setToLanguage, result, setResult, fromText, setFromText } = useStore()

  return (
    <>
    <Container fluid>
      <h1>App</h1>
      <Row>
        <Col>
        <Stack gap={2}>
          <LanguageSelector 
          type='from'
          value={fromLanguage}
          onChange={setFromLanguage}/>
          <TextArea 
          type={SectionType.From}
          value={fromText}
          onChange={setFromText}
          />
        </Stack>
        </Col>
        <Col xs='auto'>
        <Button variant='link' disabled={fromLanguage == AUTO_LANGUAGE} onClick={intercambiarIdiomas}>
        <Cambio />
        </Button>
        </Col>
        <Col>
        <Stack gap={2}>
          <LanguageSelector 
          type='to'
          value={toLanguage}
          onChange={setToLanguage}/>
          <TextArea 
          loading={loading}
          type={SectionType.To}
          value={result}
          onChange={setResult}
          />
        </Stack>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default App
