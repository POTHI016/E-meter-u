// Set a section to false to restore its existing screen.
const sectionsUnderDevelopment = {
    'view-history': true,
    'view-ranking': true,
    'view-reports': true,
    'view-alerts': true
};

export function isSectionUnderDevelopment(viewId) {
    return sectionsUnderDevelopment[viewId] === true;
}
