import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

test('Counter component', async () => {
  render(<App />)

  screen.getByText('0')

  screen.getByText('Loading...')
  await screen.findByText('The year 0 does not exist.')

  const incrementButton = screen.getByRole('button', { name: 'Increment' })
  await userEvent.click(incrementButton)

  screen.getByText('1')
  screen.getByText('Loading...')
  await screen.findByText('1 is the loneliest number.')
  expect(screen.queryByText('0')).not.toBeInTheDocument()

  const decrementButton = screen.getByRole('button', { name: 'Decrement' })
  await userEvent.click(decrementButton)

  screen.getByText('0')
})
