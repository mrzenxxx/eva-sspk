module.exports = {
  '**/*.(ts|tsx|js|jsx)': (filenames) => [
    `eslint --fix ${filenames.join(' ')}`,
    `prettier --write ${filenames.join(' ')}`,
  ],
  '**/*.(json|css|scss|md)': (filenames) => [`prettier --write ${filenames.join(' ')}`],
}
