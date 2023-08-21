import { FormControl, FormLabel, Grid, Input, Select } from '@chakra-ui/react'

function AccountSettings() {
  return (
    <Grid
      templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
      gap={6}
    >
      <FormControl id="firstName">
        <FormLabel>First Name</FormLabel>
        <Input focusBorderColor="brand.blue" type="text" placeholder="Enter Your First Name" />
      </FormControl>
      <FormControl id="lastName">
        <FormLabel>Last Name</FormLabel>
        <Input focusBorderColor="brand.blue" type="text" placeholder="Enter Your Last Name" />
      </FormControl>
      <FormControl id="phoneNumber">
        <FormLabel>Phone Number</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="tel"
          placeholder="Enter Your Phone Number"
        />
      </FormControl>
      <FormControl id="emailAddress">
        <FormLabel>Email Address</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="email"
          placeholder="Enter Your Email"
        />
      </FormControl>
      <FormControl id="city">
        <FormLabel>City</FormLabel>
        <Select focusBorderColor="brand.blue" placeholder="Select city">
          <option value="pune" selected>Pune</option>
          <option value="mumbai">Mumbai</option>
          <option value="delhi">New Delhi</option>
          <option value="bangalore">Bangalore</option>
          <option value="chennai">Chennai</option>
          <option value="kolkata">Kolkata</option>
          <option value="hyderabad">Hyderabad</option>
        </Select>
      </FormControl>
      <FormControl id="country">
        <FormLabel>Country</FormLabel>
        <Select focusBorderColor="brand.blue" placeholder="Select country">
          <option value="india" selected>
            India
          </option>
        </Select>
      </FormControl>
    </Grid>
  )
}

export default AccountSettings
