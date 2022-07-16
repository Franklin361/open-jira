type UNITS = 'day' | 'hour' | 'minute' | 'second'

const DATE_UNITS: [UNITS, number][] = [
    ['day', 86400],
    ['hour', 3600],
    ['minute', 60],
    ['second', 1]
]

const getDateDiffs = (timestamp: number) => {
    const now = Date.now()
    const elapsed = (timestamp - now) / 1000

    for (const [unit, secondsInUnit] of DATE_UNITS) {
        if (Math.abs(elapsed) > secondsInUnit || unit === 'second') {
            const value = Math.round(elapsed / secondsInUnit)
            return { value, unit }
        }
    }
}



export const getTimeAgo = (timestamp: number) => {

    const rtf = new Intl.RelativeTimeFormat('en-EN', { style: 'short' })

    const { value, unit } = getDateDiffs(timestamp)!

    return rtf.format(value, unit)
}