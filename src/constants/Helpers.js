export const DayOfWeek = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado'
]

export const NameOfMonth = [
    'janeiro',
    'fevereiro',
    'março',
    'abril',
    'maio',
    'junho',
    'julho',
    'agosto',
    'setembro',
    'outubro',
    'novembro',
    'dezembro'
]

export const gethora = (data) => {
    dataString = data.toLocaleTimeString().split(':')
    return `${dataString[0]}:${dataString[1]}`
}


