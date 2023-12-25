import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"

const SalaryRange = () => {
  return (
    <Container>
        <h5>Salary Range</h5>
        <Form.Group>
            <Form.Label>From:</Form.Label>
            <Form.Select>
            <option value="0">£ Any</option>
            <option value="10000">Up to £10,000</option>
            <option value="12000">£12,000</option>
            <option value="14000">£14,000</option><option value="16000">£16,000</option><option value="18000">£18,000</option><option value="20000">£20,000</option><option value="22000">£22,000</option><option value="24000">£24,000</option><option value="26000">£26,000</option><option value="28000">£28,000</option><option value="30000">£30,000</option><option value="32000">£32,000</option><option value="34000">£34,000</option><option value="36000">£36,000</option><option value="38000">£38,000</option><option value="40000">£40,000</option><option value="42000">£42,000</option><option value="44000">£44,000</option><option value="46000">£46,000</option><option value="48000">£48,000</option><option value="50000">£50,000</option><option value="55000">£55,000</option><option value="60000">£60,000</option><option value="65000">£65,000</option><option value="70000">£70,000</option><option value="75000">£75,000</option><option value="80000">£80,000</option><option value="85000">£85,000</option><option value="90000">£90,000</option><option value="95000">£95,000</option><option value="100000">£100,000+</option>
            </Form.Select>
        </Form.Group>
        <Form.Group>
            <Form.Label>To:</Form.Label>
            <Form.Select>
            <option value="0">£ Any</option>
            <option value="10000">Up to £10,000</option>
            <option value="12000">£12,000</option>
            <option value="14000">£14,000</option><option value="16000">£16,000</option><option value="18000">£18,000</option><option value="20000">£20,000</option><option value="22000">£22,000</option><option value="24000">£24,000</option><option value="26000">£26,000</option><option value="28000">£28,000</option><option value="30000">£30,000</option><option value="32000">£32,000</option><option value="34000">£34,000</option><option value="36000">£36,000</option><option value="38000">£38,000</option><option value="40000">£40,000</option><option value="42000">£42,000</option><option value="44000">£44,000</option><option value="46000">£46,000</option><option value="48000">£48,000</option><option value="50000">£50,000</option><option value="55000">£55,000</option><option value="60000">£60,000</option><option value="65000">£65,000</option><option value="70000">£70,000</option><option value="75000">£75,000</option><option value="80000">£80,000</option><option value="85000">£85,000</option><option value="90000">£90,000</option><option value="95000">£95,000</option><option value="100000">£100,000+</option>
            </Form.Select>
        </Form.Group>
    </Container>
  )
}

export default SalaryRange