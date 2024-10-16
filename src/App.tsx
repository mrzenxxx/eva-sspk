import { TypographyH1 } from './components'
import { ThemeToggle } from './components/ui/theme-toggle'
function App(): React.JSX.Element {
  return (
    <>
      <nav className="w-full h-6 p-4 flex justify-end">
        <ThemeToggle />
      </nav>
      <main className="flex flex-col items-center justify-center">
        <TypographyH1 text="Hello world" />
      </main>
    </>
  )
}

export default App
