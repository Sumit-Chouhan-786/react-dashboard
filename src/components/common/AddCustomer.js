import React from 'react'
import SectionTitle from '../Typography/SectionTitle'
import { Input, HelperText, Label, Select, Textarea } from '@windmill/react-ui'
import PageTitle from '../Typography/PageTitle'
import { Button } from '@windmill/react-ui'

function AddCustomer() {
  return (
    <>
     <PageTitle>Add Customer</PageTitle>

<SectionTitle>Customer Details</SectionTitle>

<form
  onSubmit={(e) => {
    e.preventDefault();
  }}
>
  <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
    {/* Slug */}
    <Label>
      <span>Slug</span>
      <Input className="mt-1" placeholder="unique-slug" name="slug" required />
    </Label>

    {/* Name */}
    <Label className="mt-4">
      <span>Name</span>
      <Input className="mt-1" placeholder="Jane Doe" name="name" required />
    </Label>

    {/* Business Name */}
    <Label className="mt-4">
      <span>Business Name</span>
      <Input className="mt-1" placeholder="Business Name" name="businessName" />
    </Label>

    {/* Banner Image */}
    <Label className="mt-4">
      <span>Banner Image</span>
      <Input type="file" className="mt-1" name="bannerImage" accept="image/*" />
    </Label>

    {/* Profile Image */}
    <Label className="mt-4">
      <span>Profile Image</span>
      <Input type="file" className="mt-1" name="profileImage" accept="image/*" />
    </Label>

    {/* Location */}
    <Label className="mt-4">
      <span>Location</span>
      <Input className="mt-1" placeholder="City, State" name="location" />
    </Label>

    {/* Email */}
    <Label className="mt-4">
      <span>Email</span>
      <Input type="email" className="mt-1" placeholder="example@email.com" name="email" />
    </Label>

    {/* Contact */}
    <Label className="mt-4">
      <span>Contact</span>
      <Input type="text" className="mt-1" placeholder="1234567890" name="contact" />
    </Label>

    {/* Alternative Number */}
    <Label className="mt-4">
      <span>Alternative Number</span>
      <Input type="text" className="mt-1" placeholder="0987654321" name="numberalternative" />
    </Label>

    {/* WhatsApp */}
    <Label className="mt-4">
      <span>WhatsApp</span>
      <Input type="text" className="mt-1" placeholder="WhatsApp Number" name="whatsapp" />
    </Label>

    {/* Instagram */}
    <Label className="mt-4">
      <span>Instagram</span>
      <Input className="mt-1" placeholder="https://instagram.com/username" name="instagram" />
    </Label>

    {/* Facebook */}
    <Label className="mt-4">
      <span>Facebook</span>
      <Input className="mt-1" placeholder="https://facebook.com/username" name="facebook" />
    </Label>

    {/* YouTube */}
    <Label className="mt-4">
      <span>YouTube</span>
      <Input className="mt-1" placeholder="https://youtube.com/channel/xyz" name="youtube" />
    </Label>

    {/* Description */}
    <Label className="mt-4">
      <span>Description</span>
      <Textarea
        className="mt-1"
        rows="3"
        placeholder="Enter description here"
        name="description"
      />
    </Label>

    {/* Gallery Images (Multiple Upload) */}
    <Label className="mt-4">
      <span>Gallery Images</span>
      <Input
        type="file"
        className="mt-1"
        multiple
        accept="image/*"
        name="galleryImages"
      />
      <HelperText>Select multiple images for the gallery</HelperText>
    </Label>

    {/* Privacy Policy */}
    <Label className="mt-6" check>
      <Input type="checkbox" name="agree" required />
      <span className="ml-2">
        I agree to the <span className="underline">privacy policy</span>
      </span>
    </Label>
      {/* Submit Button */}
  <div className="flex justify-center mt-5 mb-3">
      <Button type="submit" className="mt-4">
            Add customer
      </Button>
  </div>
  </div>


</form>

    </>
  )
}

export default AddCustomer
