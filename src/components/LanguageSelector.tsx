import { Form } from "react-bootstrap"
import { AUTO_LANGUAGE, LENGUAJES_SOPORTADOS } from "../constants"
import type { FromLanguage, Language } from "../types"


/**
 * interface Props {
    onChange: (Language : Language ) => void
}
 */

type Props =
    | { type : 'from', value: FromLanguage, onChange: (language: FromLanguage) => void }
    | { type : 'to', value: Language, onChange: (language: Language) => void }

export const LanguageSelector = ({ onChange, type, value }: Props) => {

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement> ) =>{
        onChange(e.target.value as Language)
    }

    return (
        <Form.Select aria-label="Selecciona el idioma" onChange={handleChange} value={value}>
            { type == 'from' && <option value={AUTO_LANGUAGE}>Detectar Idioma</option> }
            {Object.entries(LENGUAJES_SOPORTADOS).map(([key, literal]) => (
                <option key={key} value={key}>
                    {literal}
                </option>
            ))}
        </Form.Select>
    )
}