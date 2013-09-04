puts "var $COLORS = {};";
i = 0;
puts "$COLORS['rain'] = [];"
File.open('dislinrain.tab').each_line do |line|
	
	c = line.strip.scan(/([\d\.]+)/)
	r = c[0][0]
	g = c[1][0]
	b = c[2][0]
	puts "$COLORS['rain'][ #{i} ] = { r: #{r}, g: #{g}, b: #{b} };"
	i+= 1;
end
i = 0;
puts "$COLORS['temp'] = [];"
File.open('dislintemp.tab').each_line do |line|
	
	c = line.strip.scan(/([\d\.]+)/)
	r = c[0][0]
	g = c[1][0]
	b = c[2][0]
	puts "$COLORS['temp'][ #{i} ] = { r: #{r}, g: #{g}, b: #{b} };"
	i+= 1;
end
i = 0;
puts "$COLORS['spec'] = [];"
File.open('dislinspec.tab').each_line do |line|
	
	c = line.strip.scan(/([\d\.]+)/)
	r = c[0][0]
	g = c[1][0]
	b = c[2][0]
	puts "$COLORS['spec'][ #{i} ] = { r: #{r}, g: #{g}, b: #{b} };"
	i+= 1;
end