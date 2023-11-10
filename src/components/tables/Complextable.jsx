import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Checkbox,
  Progress,
} from "@chakra-ui/react";
import { CheckCircleIcon, WarningIcon, CloseIcon } from "@chakra-ui/icons";

const process = [
  {
    percentage: 100,
  },
];

const Complextable = () => {
  return (
    <Card>
      <CardHeader>
        <Heading size="md">Complex Table</Heading>
      </CardHeader>
      <CardBody>
        <TableContainer>
          <Table variant="simple">
            <TableCaption>Imperial to metric conversion factors</TableCaption>
            <Thead>
              <Tr>
                <Th>Title</Th>
                <Th>Title</Th>
                <Th>Title</Th>
                <Th>Title</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Marketplace</Td>
                <Td>
                  <CheckCircleIcon color="#05CD99" /> Approved
                </Td>
                <Td>24.Jan.2021</Td>
                <Td isNumeric>
                  {process.map((item, index) => (
                    <Progress w="63px" ml="10px" value={item.percentage} />
                  ))}
                </Td>
              </Tr>
              <Tr>
                <Td>Venus Dashboard Builder</Td>
                <Td>
                  <CloseIcon color="#EE5D50" /> Disable
                </Td>
                <Td>30.Dec.2021</Td>
                <Td isNumeric>
                  {process.map((item, index) => (
                    <Progress w="63px" ml="10px" value={item.percentage} />
                  ))}
                </Td>
              </Tr>
              <Tr>
                <Td>Venus Design System</Td>
                <Td>
                  <WarningIcon color="#FFCE20" /> Error
                </Td>
                <Td>20.May.2021</Td>
                <Td isNumeric>
                  {process.map((item, index) => (
                    <Progress w="63px" ml="10px" value={item.percentage} />
                  ))}
                </Td>
              </Tr>
              <Tr>
                <Td>Uranus</Td>
                <Td>
                  <CheckCircleIcon color="#05CD99" /> Approved
                </Td>
                <Td>12.Jul.2021</Td>
                <Td isNumeric>
                  {process.map((item, index) => (
                    <Progress w="63px" ml="10px" value={item.percentage} />
                  ))}
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </CardBody>
    </Card>
  );
};

export default Complextable;
