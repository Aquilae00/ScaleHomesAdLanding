# Google Conversion Tracking Setup Guide

## What Was Added

I've added Google conversion tracking for phone calls across your website. When someone clicks any "Call" button, a conversion event is automatically sent to Google Analytics.

## Tracking Locations

The conversion event is now tracked in **3 locations**:

1. **Hero Section** - "Call Us Now" button
2. **Need Remodel Section** - "📞 Call Now" button  
3. **Footer** - Phone number link

## Event Details

Each conversion event sends the following data:

- **Event Type**: `conversion`
- **Send To**: `G-0K1RSKHQB0/phone_call`
- **Event Category**: `Phone Call`
- **Event Label**: Location where the call was initiated (Hero Section, Need Remodel Section, or Footer)
- **Value**: 1

## Next Steps - Setting Up in Google Ads

To complete the setup and track these conversions in Google Ads:

### 1. Create a Conversion Action in Google Ads

1. Go to [Google Ads](https://ads.google.com)
2. Click **Tools & Settings** (wrench icon) → **Conversions**
3. Click the **+ New conversion action** button
4. Select **Website**
5. Choose **Phone calls** → **Clicks on phone number on website**

### 2. Configure the Conversion

- **Conversion name**: "Phone Call - Website"
- **Category**: Select "Lead" or "Phone calls"
- **Value**: Use the same value for each conversion (or assign a custom value)
- **Count**: Choose "One" (counts each click once per ad interaction)
- **Conversion window**: 30 days (recommended)
- **Attribution model**: Choose your preferred model

### 3. Get Your Conversion ID

After creating the conversion, Google will provide you with a conversion ID and label that looks like:
```
AW-XXXXXXXXX/YYYYYYYYYYYY
```

### 4. Update the Code (if needed)

If Google provides a different conversion format, update the `send_to` parameter in these files:
- `src/components/HeroSection.tsx` (line ~13)
- `src/components/NeedRemodelSection.tsx` (line ~31)  
- `src/components/Footer.tsx` (line ~19)

Replace:
```javascript
send_to: "G-0K1RSKHQB0/phone_call",
```

With your actual conversion ID:
```javascript
send_to: "AW-XXXXXXXXX/YYYYYYYYYYYY",
```

## Testing the Conversion

To verify the conversion is working:

1. Open your website in Chrome
2. Open Chrome DevTools (F12)
3. Go to the **Console** tab
4. Click any "Call" button
5. You should see a network request to `google-analytics.com` with the conversion data

Alternatively, use the [Google Tag Assistant](https://tagassistant.google.com/) Chrome extension to verify events are firing correctly.

## Viewing Conversion Data

After setup:
- Conversions will appear in Google Ads under **Campaigns** → **Conversions** column
- It may take 24-48 hours for data to start appearing
- Historical data is not retroactively tracked

## Additional Notes

- The same conversion tracking is already set up for form submissions (`generate_lead` event in ContactForm.tsx)
- Each click location (Hero, Need Remodel, Footer) is labeled separately so you can see which section drives the most calls
- Conversions are only tracked when someone actually clicks a call button, not when they view the page

---

Questions? Contact your Google Ads representative or visit the [Google Ads Help Center](https://support.google.com/google-ads/answer/6331314).

