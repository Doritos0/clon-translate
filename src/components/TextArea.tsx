import { Form } from "react-bootstrap";
import { SectionType } from "../types";

interface Props {
    type: SectionType
    loading ?: boolean
    onChange: (value: string) => void
    value: string
}


export const TextArea = ({ type, loading, value, onChange } : Props) =>{

    console.log(value)
    console.log(onChange)
    
    const commonStyles = { border: 0, height: '200px', resize: 'none'}

    const getPlaceholder = ({ type, loading }: { type: SectionType, loading?: boolean }) => {
    if (type === SectionType.From) return 'Introducir texto'
    if (loading === true) return 'Cargando...'
    return 'Traducción'
    }

    const styles = type == SectionType.From
    ? commonStyles 
    : {...commonStyles, backgroundColor: '#F6F6F6'}

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>{
        onChange(e.target.value)
    }

    return (
      <Form.Control
        autoFocus={type == SectionType.From}
        as='textarea'
        placeholder={getPlaceholder({ type, loading })}
        disabled={type == SectionType.To}
        style={styles}
        onChange={handleChange}
      />
    )
}

export default TextArea