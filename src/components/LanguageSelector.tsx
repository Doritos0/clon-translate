import { Form } from "react-bootstrap"
import { LENGUAJES_SOPORTADOS } from "../constants"

export const LanguageSelector = ({ onChange }) => {
    return (
        <Form.Select aria-label="Selecciona el idioma">
            {Object.entries(LENGUAJES_SOPORTADOS).map(([key, literal]) => (
                <option key={key} value={key}>
                    {literal}
                </option>
            ))}
        </Form.Select>
    )
}