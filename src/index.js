const seeMore = window.document.getElementsByClassName('summaryText')[0];
const firstParagraph = window.document.getElementsByClassName('summaryFirst')[0];
const allParagraph = window.document.getElementsByClassName('summaryAll')[0];



function seeMoreSummary() {
    if (allParagraph.style.display = 'none') {
        firstParagraph.style.display = 'none'
        allParagraph.style.display = 'flex'
    }
}

function seeMinusSummary() {
    if (allParagraph.style.display = 'flex') {
        firstParagraph.style.display = 'inline'
        allParagraph.style.display = 'none'
    }
}